/**
 * [categorieListfilterBySearch description]
 *
 * @param   {array}  list    Category list
 * @param   {string}  search  Search input value
 *
 * @return  {array}         An array filter by search
 */
function categorieListfilterBySearch(list, search) {
  if (search.length < 3) {
    return list;
  }
  return list.filter((item) => item.includes(search));
}

/**
 * [createCategorieList description]
 *
 * @param   {array}  data       - The list of recipes
 * @param   {string}  category  - The category of the dropdown
 * @return  {array}            - The list of the dropdown sorted alphabetically
 */
function createCategorieList(data, category) {
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
  return [...new Set(list)].sort();
}

/**
 * Get the list of each dropdown
 * @param   {array}  data       - The list of recipes
 * @param   {string}  category  - The category of the dropdown
 * @param   {array}   tags      - The list of tags
 * @param   {string}  search    - The search input value
 * @return  {array}             - The list of the dropdown
 */
function getCategoriesList(data, category, tags, search) {
  // Get the list of each dropdown
  const categorielist = createCategorieList(data, category);
  const tagsList = tags.map((tag) => tag[1].toLowerCase());
  // Remove tags from the list
  const filteredList = categorielist.filter((item) => !tagsList.includes(item));
  // Filter the list by search
  const filteredSearchList = categorieListfilterBySearch(filteredList, search);

  return filteredSearchList;
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
