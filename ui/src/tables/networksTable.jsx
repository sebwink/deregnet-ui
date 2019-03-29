import React, { Component } from 'react';
import ReactTable from 'react-table';
import networks from '../backend/deregnet/graphs';

class NetworksTable extends Component {
  columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Description', accessor: 'description' },
    { Header: '# nodes', accessor: 'num_nodes' },
    { Header: '# edges', accessor: 'num_edges' },
    { Header: 'Uploaded', accessor: 'time_of_upload' },
  ]

  state = {
    data: [],
  }

  async componentDidMount() {
    const data = await networks.get();
    this.setState({ data });
  }

  render() {
    return (
      <ReactTable 
        data={this.state.data}
        columns={this.columns}
        defaultPageSize={15}
        pageSizeOptions={[5, 10, 15]}
        noDataText="You do not have any networks."
        rowsText="networks"
      />
    );
  }
}

export default NetworksTable;
