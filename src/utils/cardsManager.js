/**
 * It takes an ingredient object and returns a string that displays the ingredient's name, quantity,
 * and unit
 * @param {object} ingredient - the ingredient object
 * @return {string} - the ingredient name, quantity, and unit.
 */
export default function displayIngredients(ingredient) {
  if (ingredient.quantity) {
    if (ingredient.unit) {
      return `${ingredient.ingredient}: ${ingredient.quantity}${ingredient.unit}`;
    }
    return `${ingredient.ingredient} ${ingredient.quantity}`;
  }
  if (ingredient.quantite) {
    if (ingredient.unit) {
      return `${ingredient.ingredient}: ${ingredient.quantite}${ingredient.unit}`;
    }
    return `${ingredient.ingredient} ${ingredient.quantite}`;
  }
  return ingredient.ingredient;
}
