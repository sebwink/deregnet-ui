import React, { Component } from 'react';
import ReactTable from 'react-table';
import runs from '../backend/deregnet/runs';

class RunsTable extends Component {
  columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'Posted', accessor: 'post_time' },
    { Header: 'Started', accessor: 'started' },
    { Header: 'Done', accessor: 'done' },
  ]

  state = {
    data: [],
  }

  async componentDidMount() {
    const data = await runs.get();
    this.setState({ data });
  }

  render() {
    return (
      <ReactTable 
        data={this.state.data}
        columns={this.columns}
        defaultPageSize={15}
        pageSizeOptions={[5, 10, 15]}
        noDataText="You do not have any runs."
        rowsText="runs"
      />
    );
  }
}

export default RunsTable;
