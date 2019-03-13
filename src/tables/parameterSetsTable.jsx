import React, { Component } from 'react';
import ReactTable from 'react-table';
import scores from '../backend/deregnet/scores';

class ScoresTable extends Component {
  columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'Size', accessor: 'size' },
    { Header: 'Uploaded', accessor: 'time_of_upload' },
  ]

  state = {
    data: [],
  }

  async componentDidMount() {
    const data = await scores.get();
    this.setState({ data });
  }

  render() {
    return (
      <ReactTable 
        data={this.state.data}
        columns={this.columns}
        defaultPageSize={15}
        pageSizeOptions={[5, 10, 15]}
      />
    );
  }
}

export default ScoresTable;
