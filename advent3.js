// sacks = a long string
//const rucksacks = sacks.split('\n');

const LOWERCASE_OFFSET = 96;
const UPPERCASE_OFFSET = 38;

function unpackRucksacks(allRucksacks) {
  let sum = 0;
  allRucksacks.forEach(sack => {
    sum += unpackCompartments(sack);
  });
  return sum;
}

function unpackCompartments(rucksackString) {
  const halfwayPoint = (0.5 * rucksackString.length);
  let firstSack = rucksackString.slice(0, halfwayPoint);
  let secondSack = rucksackString.slice(halfwayPoint, rucksackString.length);
  return priority(rankCommonItem([firstSack, secondSack]));
}

function rankCommonItem(rucksacks) {
  let items = rucksacks.map(sack => sack.split(''));
  let commonItems = items[0];
  items.slice(1, items.length).forEach(nextSack => {
    commonItems = commonItems.filter(item => nextSack.includes(item));
  });
  return commonItems[0];
}

function priority(item) {
  if (item.match(/[a-z]/)) { return (item.charCodeAt(0) - LOWERCASE_OFFSET); }
  else if (item.match(/[A-Z]/)) { return (item.charCodeAt(0) - UPPERCASE_OFFSET); }
  else { return 0; }
}

function getBadgeSum(allRucksacks, totalElves) {
  let sum = 0;
  for (let idx = 0; idx < allRucksacks.length; idx += totalElves) {
    sum += priority(rankCommonItem(allRucksacks.slice(idx, idx + totalElves)));
  }
  return sum;
}

// console.log(unpackRucksacks(rucksacks));
// console.log(getBadgeSum(rucksacks, 3));