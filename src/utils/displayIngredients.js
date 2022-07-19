/**
 * It takes an ingredient object and returns a string that displays the ingredient's name, quantity,
 * and unit
 * @param {object} ingredient - the ingredient object
 * @return {string} - the ingredient name, quantity, and unit.
 */
export default function displayIngredients(ingredient) {
  if (ingredient.quantity) {
    if (ingredient.unit) {
      return `${ingredient.quantity}${ingredient.unit}`;
    }
    return `${ingredient.quantity}`;
  }
  if (ingredient.quantite) {
    if (ingredient.unit) {
      return `${ingredient.quantite}${ingredient.unit}`;
    }
    return `${ingredient.quantite}`;
  }
  return '';
}
