import React from 'react';
import EditForm from '../components/EditForm';
import PropTypes from 'prop-types';

const EditUserForm = props => {
 return <EditForm
 editing={props.editing}
 setEditing={props.setEditing}
 currentUser={props.currentUser}
 updateUsers={props.updateUsers} />;
};

EditUserForm.propTypes = {
  editing: PropTypes.bool,
  setEditing: PropTypes.bool,
  currentUser: PropTypes.object,
  updateUsers: PropTypes.func
};

export default EditUserForm;
