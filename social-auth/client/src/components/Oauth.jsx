import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-fontawesome';
import { apiUrl } from '../config';

const Oauth = (props) => {
    const [user, setUser] = useState({});
    const [disabled, setDisabled] = useState(false);
    let popup;

    const closePopup = () => {
        if (popup) popup.close();
    };

    useEffect(() => {
        const { socket, provider } = props;
        socket.on(provider, user => {  
        closePopup();
        setUser(user);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const checkPopup = () => {
        const check = setInterval(() => {
            if (!popup || popup.closed) {
            clearInterval(check);
            setDisabled(false);
            }
        }, 1000);
    };

    const openPopup = () => {
        const { provider, socket } = props;
        const width = 600, height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const url = `${apiUrl}/${provider}?socketId=${socket.id}`;
    
        return window.open(url, '',       
          `toolbar=no, location=no, directories=no, status=no, menubar=no, 
          scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
          height=${height}, top=${top}, left=${left}`
        );
      };

    const startAuth = e => {
        e.preventDefault();
        if (!disabled) {
            popup = openPopup(); 
            checkPopup();
            setDisabled(true);
        }
    };

    const closeCard = () => setUser({});

    const { name, photo } = user;
    const { provider } = props
    
    return (
      <div>
        {name
          ? (
            <div className={'card'}>              
              <img src={photo} alt={name} />
              <FontAwesome
                name={'times-circle'}
                className={'close'}
                onClick={closeCard}
              />
              <h4>{name}</h4>
            </div>
          )
          : (
            <div className={'button-wrapper fadein-fast'}>
              <button 
                onClick={startAuth}
                className={`${provider} button`}
                disabled={disabled}
              >
                <FontAwesome
                  name={provider}
                />
              </button>
            </div>
          )
        }
      </div>
    )
};

export default Oauth;
