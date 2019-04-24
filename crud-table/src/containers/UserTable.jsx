import React from 'react';
import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';

const UserTable = (props) => {
  return (
    <table>
      <TableHeader />
      <TableBody users={props.users} deleteUsers={props.deleteUsers} />
    </table>
  );
};

export default UserTable;
