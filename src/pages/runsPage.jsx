import React from 'react';
import TablePage from './common/tablePage';
import RunsTable from '../tables/runsTable';

class RunsPage extends TablePage {
  components = [
    null, null, null,
    null, <RunsTable />, null,
    null, null, null,
  ];
}

export default RunsPage;
