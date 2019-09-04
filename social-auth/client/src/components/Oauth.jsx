import React, { useState, useEffect } from 'react';

const Oauth = (props) => {
    const [user, setUser] = useState({});
    const [disabled, setDisabled] = useState('');
    let popup;

    const closePopup = () => {
        if (popup) popup.close();
    };

    useEffect(() => {
        const { socket, provider } = props;
        // socket.on(provider, user => {  
        closePopup();
        setUser(user);
        }, []);
    return (
        <div>
            
        </div>
    )
};

export default Oauth;
