import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = ({
    formStructure,
    formData,
    setFormData,
    formTitle,
    buttonText,
    onSubmit
}) => {
    const handleChange = ({ target }) => {
        const { name, value } = target;
        const formDataCopy = { ...formData };
        formDataCopy[name] = value;
        setFormData(formDataCopy);
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>{formTitle}</h2>
            {formStructure.map(f => (
                <Input
                key={f.name}
                type={f.type}
                name={f.name}
                id={f.id}
                text={f.text}
                handleChange={handleChange}
                placeholder={f.placeholder}
                required={f.required}
                />
            ))}
            <Button buttonType='primary' text={buttonText} />
        </form>
    )
};

export default Form;
