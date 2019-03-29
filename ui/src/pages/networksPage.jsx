import React from 'react';
import TablePage from './common/tablePage';
import NetworksTable from '../tables/networksTable';

class NetworksPage extends TablePage {
  components = [
    null, null, null,
    null, <NetworksTable />, null,
    null, null, null,
  ];
}

export default NetworksPage;
