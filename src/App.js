import React, { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Tags from './components/Tags/Tags';
import Dropdowns from './components/Dropdowns/Dropdowns';
import Cards from './components/Cards/Cards';
import recipes from './data/recipes';
import hashTable from './utils/createHashTable';
import filterRecipes from './utils/filterRecipes';

function App() {
  const [searchValue, setsearchValue] = useState('');
  const [tags, setTags] = useState([]);

  return (
    <>
      <Header />
      <Search setsearchValue={setsearchValue} />
      <Tags tags={tags} setTags={setTags} />
      <Dropdowns
        filterRecipes={filterRecipes(recipes, hashTable, searchValue, tags)}
        tags={tags}
        setTags={setTags}
      />
      <Cards
        filterRecipes={filterRecipes(recipes, hashTable, searchValue, tags)}
      />
    </>
  );
}

export default App;
