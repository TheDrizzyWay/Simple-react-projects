import React from 'react';
import EditForm from '../components/EditForm';

const EditUserForm = props => {
 return <EditForm
 editing={props.editing}
 setEditing={props.setEditing}
 currentUser={props.currentUser}
 updateUsers={props.updateUsers} />;
};

export default EditUserForm;
