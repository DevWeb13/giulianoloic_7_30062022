import React, { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Tags from './components/Tags/Tags';
import Dropdowns from './components/Dropdowns/Dropdowns';
import recipes from './data/recipes';

function App() {
  const [recipesList, setRecipesList] = useState(recipes);
  const [searchValueArray, setSearchValueArray] = useState([]);
  const [tags, setTags] = useState([]);

  return (
    <>
      <Header />
      <Search setSearchValueArray={setSearchValueArray} />
      <Tags tags={tags} setTags={setTags} />
      <Dropdowns recipesList={recipesList} tags={tags} setTags={setTags} />
    </>
  );
}

export default App;
