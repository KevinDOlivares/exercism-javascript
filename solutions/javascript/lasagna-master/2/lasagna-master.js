/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */


export function cookingStatus(remainingTime){
  return  remainingTime===0 ? 'Lasagna is done.': remainingTime ? 'Not done, please wait.':'You forgot to set the timer.';
}

export function preparationTime(layers, minutes) {
  return minutes ? (layers.length * minutes) : (layers.length *2);
}

export function quantities(layers) {
  let noodleLayer=0;
  let sauceLayer=0;
  for (const count of layers){
    count==='sauce' ? sauceLayer+=0.2 : count==='noodles' ? noodleLayer+=50:null;
  }
  return {noodles:noodleLayer, sauce:Number(sauceLayer.toFixed(1))};    
}

export function addSecretIngredient(friendsList, myOwnRecipe){
  myOwnRecipe.push(friendsList[friendsList.length-1]);
}

export function scaleRecipe(recipe,portions){
  const multiplier=portions/2;
  const newRecipe={}
  for(const ingredient in recipe){
    newRecipe[ingredient]=recipe[ingredient]*multiplier;
  }
  return newRecipe;
}