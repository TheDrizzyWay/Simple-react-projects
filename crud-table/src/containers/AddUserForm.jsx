import React from 'react';
import Form from '../components/Form';
import PropTypes from 'prop-types';

const AddUserForm = props => {
 return <Form addUsers={props.addUsers} />;
};

AddUserForm.propTypes = {
  addUsers: PropTypes.func.isRequired
};

export default AddUserForm;
