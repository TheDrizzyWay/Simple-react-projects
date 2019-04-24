import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';

const UserTable = (props) => {
  return (
    <table>
      <TableHeader />
      <TableBody
      users={props.users}
      deleteUsers={props.deleteUsers}
      editRow={props.editRow} />
    </table>
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUsers: PropTypes.func,
  editRow: PropTypes.func
};

export default UserTable;
