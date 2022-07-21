/**
 * It filters the recipes by the tags
 *
 * @param   {array}  recipes  - The list of recipes
 * @param   {array}  tags     - The list of tags
 *
 * @return  {array}           - The list of recipes that match the tags
 */
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

/**
 * If the search term is less than 3 characters, return all recipes, otherwise return only the recipes
 * that match the search term
 * @param   {array}  recipes  - The list of recipes
 * @param   {string}  search   - The search input value
 *
 * @return  {Array}           - The list of recipes that match the search criteria
 */
function filterBySearch(recipes, search) {
  let filteredRecipes = [];
  const searchTerm = search.toLowerCase().trim();
  if (search.length < 3) {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(searchTerm),
        )
      );
    });
  }
  return filteredRecipes;
}

/**
 * [filterRecipes description]
 *
 * @param   {array}  recipes  - The list of recipes
 * @param   {string}  search   - The search input value
 * @param   {array}  tags     - The list of tags
 *
 * @return  {array}             - The list of recipes that match the search criteria and the tags
 */
export default function filterRecipes(recipes, search, tags) {
  const searchFilteredRecipes = filterBySearch(recipes, search);
  return filterByTags(searchFilteredRecipes, tags);
}
