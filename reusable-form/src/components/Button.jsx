import React from 'react'

const Button = ({ text, clicked, buttonType }) => {
    return (
        <>
            <button  onClick={clicked} className={buttonType}>
                {text}
            </button>
        </>
    )
};

export default Button;
