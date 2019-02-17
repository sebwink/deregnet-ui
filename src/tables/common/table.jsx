import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { css } from 'glamor';

import TableHeader from './tableHeader';
import TableBody from './tableBody';
import './styles/table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 4,
      currentPage: 1,
    };
  }

  async componentDidMount() {
    try {
      const data = await this.getData();
      if (!data) {
        toast.warning(`You do not have any ${this.resource}s yet.`, {
          autoClose: false,
          position: toast.POSITION.BOTTOM_RIGHT,
          bodyClassName: css({ color: 'RoyalBlue' }),
        });
      }
      this.setState({ data });
    } catch (error) {
      toast.error('Sorry, something went wrong.', {
        position: toast.POSITION.BOTTOM_RIGHT, 
      });
    }
  }

  onSort = (sortColumn) => {
    this.setState({ sortColumn });
  }

  render() {
    const { data, sortColumn } = this.state;
    if (!data) {
      return null
    }
    return (
      <table className={`table ${this.resource}-table`}>
        <TableHeader 
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={this.onSort}
        />
        <TableBody 
          data={data}
          columns={this.columns}
        />
      </table>
    );
  }
}

export default Table;
