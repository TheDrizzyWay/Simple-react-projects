import React, { useState } from 'react';
import Form from '../components/Form';

const SampleForm = props => {
    const [formData, setFormData] = useState({});
    const handleSubmit = e => {
        e.preventDefault();
        // perform login or whatever...
    };

    return (
        <Form
            onSubmit={handleSubmit}
            formTitle={props.formTitle}
            setFormData={setFormData}
            formStructure={props.formStructure}
            formData={formData}
            buttonText={props.buttonText}
        />
    )
};

export default SampleForm;
