/**
 * It filters the recipes by the tags
 * @param   {array}  recipes  - The list of recipes
 * @param   {array}  tags     - The list of tags
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
 * It takes a list of recipes, a search term, and a table of search terms to recipe ids, and returns a
 * list of recipes that match the search term
 * @param   {Array}  recipes  - The list of recipes
 * @param   {object}  table    - The hash table that maps a search term to an array of recipe ids
 * @param   {string}  search   - The search input value
 *
 * @return  {array}           - The list of recipes that match the search criteria
 */
function filterBySearch(recipes, table, search) {
  if (search === '') return recipes;
  const filteredRecipes = [];
  if (!table[search]) {
    return filteredRecipes;
  }
  for (const id of table[search]) {
    filteredRecipes.push(recipes[id]);
  }
  return filteredRecipes;
}

/**
 * It filters recipes by search and tags
 * @module filterRecipes
 * @param   {array}  recipes  - The list of recipes
 * @param   {string}  search   - The search input value
 * @param   {array}  tags     - The list of tags
 * @return  {array}             - The list of recipes that match the search criteria and the tags
 */
export default function filterRecipes(recipes, table, search, tags) {
  const searchFilteredRecipes = filterBySearch(recipes, table, search);
  return filterByTags(searchFilteredRecipes, tags);
}
