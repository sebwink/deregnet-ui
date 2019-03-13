import React from 'react';
import TablePage from './common/tablePage';
import SubgraphsTable from '../tables/subgraphsTable';

class SubgraphsPage extends TablePage {
  components = [
    null, null, null,
    null, <SubgraphsTable />, null,
    null, null, null,
  ];
}

export default SubgraphsPage;
