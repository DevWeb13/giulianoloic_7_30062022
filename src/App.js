import React, { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Tags from './components/Tags/Tags';
import Dropdowns from './components/Dropdowns/Dropdowns';
import Cards from './components/Cards/Cards';
import recipes from './data/recipes';
import filterRecipes from './utils/dataManager';

function App() {
  const [recipesList] = useState(recipes);
  const [searchValue, setsearchValue] = useState('');
  const [tags, setTags] = useState([]);

  return (
    <>
      <Header />
      <Search setsearchValue={setsearchValue} />
      <Tags tags={tags} setTags={setTags} />
      <Dropdowns
        filterRecipes={filterRecipes(recipesList, searchValue, tags)}
        tags={tags}
        setTags={setTags}
      />
      <Cards filterRecipes={filterRecipes(recipesList, searchValue, tags)} />
    </>
  );
}

export default App;
