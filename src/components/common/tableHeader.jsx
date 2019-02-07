import React, { Component } from 'react';


class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = {...this.props.sortColumn};
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    else return <i className="fa fa-sort-desc"></i>;
  };

  render() {
		const { columns } = this.props;
		return (
    	<thead className="thead-dark">
      	<tr>
					{
						columns.map( (column) => (
              <th 
                className={column.sortable ? "clickable" : ""}
                key={column.key ? column.key : column.name}
								onClick={column.sortable ? () => this.raiseSort(column.path) : () => undefined}
                scope="col"
              >
                {column.name ? column.name : ''} {this.renderSortIcon(column)}
              </th>
						))
					}
        </tr>
      </thead>
		);
 	}
}


export default TableHeader;
