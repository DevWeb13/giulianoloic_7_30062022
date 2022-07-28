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

/* **************************** Version with native loops ********************** */
/**
 * It loops through each recipe, and then loops through each ingredient in that recipe. If the
 * ingredient name, recipe name, or recipe description includes the search term, then the recipe is
 * added to the filteredRecipes array
 * @param   {array}  recipes  - The list of recipes
 * @param   {string}  search   - The search term
 *
 * @return  {array}           - The list of recipes that match the search term
 */
function filterBySearch(recipes, search) {
  if (search === '') return recipes;
  const filteredRecipes = [];
  console.log(recipes.length);
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      if (
        ingredient.ingredient.toLowerCase().includes(search) ||
        recipe.name.toLowerCase().includes(search) ||
        recipe.description.toLowerCase().includes(search)
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
