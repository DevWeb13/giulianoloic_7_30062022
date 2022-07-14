/**
 * Get the list of each dropdown
 * @param   {array}  data       - The list of recipes
 * @param   {string}  category  - The category of the dropdown
 * @return  {array}             - The list of the dropdown
 */
function getCategoriesList(data, category) {
  const list = [];
  data.forEach((recipe) => {
    if (category === 'ingredients') {
      recipe.ingredients.forEach((ingredient) => {
        list.push(ingredient.ingredient.toLowerCase());
      });
    } else if (category === 'appliance') {
      list.push(recipe.appliance.toLowerCase());
    } else if (category === 'ustensils') {
      recipe.ustensils.forEach((ustensil) => {
        list.push(ustensil.toLowerCase());
      });
    }
  });
  return [...new Set(list)];
}

/**
 * Add upper case letter to the beginning of word
 * @param   {string}  str  - The string to transform
 * @return  {string}       - The string with upper case letter
 */
function addUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Manage open and close dropdowns
 * @param   {object}  obj        - Object contains state of each dropdown
 * @param   {string}  categorie  - The category of the dropdown to open
 * @return  {object}             - Object contains new state of each dropdown
 */
function openCloseDropdowns(obj, categorie) {
  let newObj = { ...obj };
  for (const key in newObj) {
    if (key !== categorie) {
      newObj = { ...newObj, [key]: false };
    } else {
      newObj = { ...newObj, [key]: true };
    }
  }
  return newObj;
}

export { getCategoriesList, addUpperCase, openCloseDropdowns };
