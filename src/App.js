import { useMemo } from 'react';
import List from './components/List';
import apiData from './api-data.json';
import { convertList } from './utils/tree';

function App() {

  const treeData = useMemo(() => convertList(apiData), []);

  return (
    <List data={treeData} />
  )
}

export default App;
