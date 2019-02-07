import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
  renderCell(item, column) {
    const key = item._id + '-' + (column.path ? column.path : column.key);
    const cellContent = column.path ? _.get(item, column.path) : column.content(item);
    return <td key={key}>{cellContent}</td>

  }

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {
          data.map( (item) => (
            <tr key={item._id}>{columns.map( (column) => this.renderCell(item, column))}</tr>
          ))
        }
      </tbody>
    );
  }
}

export default TableBody;
