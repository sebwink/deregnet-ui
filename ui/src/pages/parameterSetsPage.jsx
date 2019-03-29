import React from 'react';
import TablePage from './common/tablePage';
import ScoresTable from '../tables/scoresTable';

class ScoresPage extends TablePage {
  components = [
    null, null, null,
    null, <ScoresTable />, null,
    null, null, null,
  ];
}

export default ScoresPage;
