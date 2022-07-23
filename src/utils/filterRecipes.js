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

/* **************************** Version with array object methods ********************** */
// /**
//  * If the search term is less than 3 characters, return all recipes, otherwise return only the recipes
//  * that match the search term
//  * @param   {array}  recipes  - The list of recipes
//  * @param   {string}  search   - The search input value
//  * @return  {Array}           - The list of recipes that match the search criteria
//  */
// function filterBySearch(recipes, search) {
//   const searchTerm = search.toLowerCase().trim();
//   if (searchTerm.length < 3) return recipes;
//   return recipes.filter((recipe) => {
//     return (
//       recipe.name.toLowerCase().includes(searchTerm) ||
//       recipe.description.toLowerCase().includes(searchTerm) ||
//       recipe.ingredients.some((ingredient) =>
//         ingredient.ingredient.toLowerCase().includes(searchTerm),
//       )
//     );
//   });
// }

/* **************************** Version with native loops ********************** */
function filterBySearch(recipes, search) {
  const searchTerm = search.toLowerCase().trim();
  if (searchTerm.length < 3) return recipes;
  const filteredRecipes = [];
  console.log(recipes.length);
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      if (
        ingredient.ingredient.toLowerCase().includes(searchTerm) ||
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm)
      ) {
        filteredRecipes.push(recipe);
        break;
      }
    }
  }
  return filteredRecipes;
}

/**
 * It filters recipes by search and tags
 *
 * @param   {array}  recipes  - The list of recipes
 * @param   {string}  search   - The search input value
 * @param   {array}  tags     - The list of tags
 * @return  {array}             - The list of recipes that match the search criteria and the tags
 */
export default function filterRecipes(recipes, search, tags) {
  const searchFilteredRecipes = filterBySearch(recipes, search);
  return filterByTags(searchFilteredRecipes, tags);
}
