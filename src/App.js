import React from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Tags from './components/Tags/Tags';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [tags, setTags] = React.useState([
    'Coco',
    'Panda',
    'Tiger',
    'fffffffffffffffffffffffffffff',
  ]);
  return (
    <>
      <Header />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Tags tags={tags} setTags={setTags} />
    </>
  );
}

export default App;
