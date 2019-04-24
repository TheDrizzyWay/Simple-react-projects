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
              <button
              onClick={() => props.editRow(user)}
              className="button muted-button">Edit</button>{' '}
              <button
              onClick={() => props.deleteUsers(user.id)}
              className="button muted-button">Delete</button>
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
