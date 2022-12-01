"use strict";
// const input = (a long string)

function greatestElfCalories(calorieString) {
  let calorieList = calorieString.split('\n\n');
  let greatestCalorieSum = 0;
  calorieList.forEach(calories => {
    let totalCalories = calories.split('\n')
      .map(number => parseInt(number, 10))
      .reduce((number, sum) => number + sum);
    if (totalCalories > greatestCalorieSum) {
      greatestCalorieSum = totalCalories;
    }
  });
  return greatestCalorieSum;
}

function topThreeElvesCalorieSum(calorieString) {
  let calorieList = calorieString.split('\n\n');
  let greatestCalorieSums = [];
  calorieList.forEach(calories => {
    let totalCalories = calories.split('\n')
      .map(number => parseInt(number, 10))
      .reduce((number, sum) => number + sum);
    if (greatestCalorieSums.length < 3) {
      greatestCalorieSums.push(totalCalories);
      greatestCalorieSums = greatestCalorieSums.sort();
    }
    if (totalCalories > greatestCalorieSums[0]) {
      greatestCalorieSums.splice(0, 1, totalCalories);
      greatestCalorieSums = greatestCalorieSums.sort();
    }
  });
  return greatestCalorieSums.reduce((number, sum) => number + sum);
}

//console.log(greatestElfCalories(input));
//console.log(topThreeElvesCalorieSum(input));