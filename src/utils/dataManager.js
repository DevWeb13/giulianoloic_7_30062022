function filterByTags(recipes, tags) {
  let filteredRecipes = recipes;
  if (tags.length > 0) {
    tags.forEach((tag) => {
      if (tag[0] === 'ingredients') {
        filteredRecipes = filteredRecipes.filter((recipe) => {
          return recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(tag[1].toLowerCase()),
          );
        });
      }
      if (tag[0] === 'appareils') {
        filteredRecipes = filteredRecipes.filter((recipe) => {
          return recipe.appliance.toLowerCase().includes(tag[1].toLowerCase());
        });
      }
      if (tag[0] === 'ustensiles') {
        filteredRecipes = filteredRecipes.filter((recipe) => {
          return recipe.ustensils.some((ustensile) =>
            ustensile.toLowerCase().includes(tag[1].toLowerCase()),
          );
        });
      }
    });
  }
  return filteredRecipes;
}

function filterBySearch(recipes, search) {
  let filteredRecipes = recipes;
  if (search.length < 3) {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(search.toLowerCase()) ||
        recipe.description.toLowerCase().includes(search.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(search.toLowerCase()),
        )
      );
    });
  }
  return filteredRecipes;
}

/**
 * [filterRecipes description]
 *
 * @param   {array}  recipes  [recipes description]
 * @param   {string}  search   [search description]
 * @param   {array}  tags     [tags description]
 *
 * @return  {array}           [return description]
 */
export default function filterRecipes(recipes, search, tags) {
  const searchFilteredRecipes = filterBySearch(recipes, search);
  const tagsFilteredRecipes = filterByTags(searchFilteredRecipes, tags);
  return tagsFilteredRecipes;
}
