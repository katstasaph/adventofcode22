const parsedPairs = pairs.split('\n');
const rangeBounds = parsedPairs.map(pair => pair.match(/[\d]+/g));

function countOverlappingRanges(allRanges, fullOverlap) {
  let overlaps = 0;
  allRanges.forEach(pair => {
    if (overlapping(pair, fullOverlap)) { overlaps += 1; }
  });
  return overlaps;  
}

function overlapping(pair, fullOverlap) {
  pair = pair.map(str => parseInt(str, 10));
  let firstPair, secondPair;
  if (shouldSwap(pair)) {
	firstPair = pair.slice(2, pair.length);
    secondPair = pair.slice(0, 2);
  }
  else {
    firstPair = pair.slice(0, 2);
	secondPair = pair.slice(2, pair.length);
  }  
  if (fullOverlap) { return fullyOverlapping(firstPair, secondPair); }
  else { return partiallyOverlapping(firstPair, secondPair); }
}

function shouldSwap(pair) {
  return ((pair[0] === pair[2] && pair[1] > pair[3]) || pair[0] >= pair[2]);
}

function fullyOverlapping(firstPair, secondPair) {
  return ((firstPair[0] <= secondPair[0] && firstPair[1] >= secondPair[1])
         || (firstPair[0] === secondPair[0] && secondPair[1] >= firstPair[1])); 
}

function partiallyOverlapping(firstPair, secondPair) {
  return (firstPair[1] >= secondPair[0]);
}

console.log(countOverlappingRanges(rangeBounds, true));
console.log(countOverlappingRanges(rangeBounds, false));