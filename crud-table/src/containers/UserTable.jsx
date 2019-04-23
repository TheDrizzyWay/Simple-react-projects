import React, { Component } from 'react';
import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';

class UserTable extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default UserTable;
