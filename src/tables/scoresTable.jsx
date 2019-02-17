import Table from './common/table';
import scores from '../backend/deregnet/scores';

class ScoresTable extends Table {
  resource = 'score'
  columns = [
    { name: 'Id', path: 'id', sortable: true },
    { name: 'Description', path: 'description', sortable: true },
    { name: 'Size', path: 'size', sortable: true },
    { name: 'Uploaded', path: 'time_of_upload', sortable: true },
  ]

  async getData() {
    return scores.get();
  }
}

export default ScoresTable;
