import React from 'react';
import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';

const UserTable = (props) => {
  return (
    <table>
      <TableHeader />
      <TableBody users={props.users} />
    </table>
  );
};

export default UserTable;
