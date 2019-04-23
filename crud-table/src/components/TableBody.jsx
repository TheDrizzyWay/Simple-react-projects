import React from 'react';

const TableBody = props => {
  return (
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.franchise}</td>
            <td>
              <button className="button muted-button">Edit</button>{' '}
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="3">No Users</td>
        </tr>
      )}
    </tbody>
  );
}

export default TableBody;
