import React from 'react';

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Name data</td>
        <td>Franchise data</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  );
}

export default TableBody;
