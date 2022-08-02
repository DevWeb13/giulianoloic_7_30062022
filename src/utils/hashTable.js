import recipes from '../data/recipes';

const hashTable = {};

/**
 * It takes a string and an index, and adds the string to the hash table at the index
 * @param   {String}  text  - The string to add to the hash table
 * @param   {Number}  index  - The index of the string in the hash table
 * @return  {void}
 */
function extractFromString(text, index) {
  let hash;
  for (let i = 3; i <= text.length; i++) {
    hash = text.slice(0, i).toLowerCase();
    if (!hashTable[hash]) hashTable[hash] = [];
    hashTable[hash].push(index);
    hashTable[hash] = [...new Set(hashTable[hash])];
  }
}

/**
 * It takes an array, and for each entry in the array, it extracts the value at the given index
 * @param   {array}  arr    - The array to extract from
 * @param   {number}  index  - The index of the string to extract.
 * @param   {string|null}  key    - The key to look for in the array. If not provided, the entire array is searched.
 * @return  {void}
 */
function extractFromArray(arr, index, key) {
  for (const entry of arr) {
    if (key) {
      extractFromString(entry[key], index);
    }
    extractFromString(entry, index);
  }
}

/**
 * It takes a string, deletes all special characters, splits the string into an array, and then calls
 * the `extractFromArray` function.
 * @param   {string}  phrasing  - The text to be parsed
 * @param   {number}  index     - The index of the word in the array
 *
 * @return  {void}
 */
function extractFromPhrasing(phrasing, index) {
  // delete special characters but not accent
  const text = phrasing.replace(
    /[^a-zA-Z0-9éèàùêëîïôöüûçÿäâÊËÏÔÖÛÜÇŸÄÂ]/g,
    ' ',
  );
  const arr = text.split(' ');
  extractFromArray(arr, index, null);
}

for (let i = recipes.length - 1; i >= 0; i--) {
  extractFromString(recipes[i].name, i);
  extractFromPhrasing(recipes[i].description, i);
  extractFromArray(recipes[i].ingredients, i, 'ingredient');
}

export default hashTable;
