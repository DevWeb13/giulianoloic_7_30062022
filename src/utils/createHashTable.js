import data from '../data/recipes';

const hashTable = {};

/**
 * [extractFromString description]
 *
 * @param   {String}  text  [type description]
 * @param   {Number}  index  [data description]
 *
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

function extractFromArray(arr, index, key) {
  for (const entry of arr) {
    if (key) {
      extractFromString(entry[key], index);
    }
    extractFromString(entry, index);
  }
}

function extractFromPhrasing(phrasing, index) {
  const arr = phrasing.split(' ');
  console.log(arr);
  extractFromArray(arr, index);
}

for (let i = data.length - 1; i > 0; i--) {
  extractFromString(data[i].name, i);
  extractFromPhrasing(data[i].description, i);
  extractFromArray(data[i].ingredients, i, 'ingredient');
}

export default hashTable;
