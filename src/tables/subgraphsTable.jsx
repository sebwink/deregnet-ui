import React, { Component } from 'react';
import ReactTable from 'react-table';
import subgraphs from '../backend/deregnet/subgraphs';

class SubgraphsTable extends Component {
  columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Run Id', accessor: 'run_id' },
    { Header: '# nodes', accessor: 'num_nodes' },
    { Header: '# edges', accessor: 'num_edges' },
    { Header: 'Score', accessor: 'score' },
    { Header: 'Optimal', accessor: 'optimal' },
    { Header: 'Optimality type', accessor: 'optimality_type' },
  ]

  state = {
    data: [],
  }

  async componentDidMount() {
    const data = await subgraphs.get();
    this.setState({ data });
  }

  render() {
    return (
      <ReactTable 
        data={this.state.data}
        columns={this.columns}
        defaultPageSize={15}
        pageSizeOptions={[5, 10, 15]}
        noDataText="You do not have any subgraphs."
        rowsText="subgraphs"
      />
    );
  }
}

export default SubgraphsTable;
