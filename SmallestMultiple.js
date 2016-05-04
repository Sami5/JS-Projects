// Smallest Common Multiple using Prime Factorisation

function smallestCommons(arr) {
  arr.sort(function(a, b){return a - b });
  var range = [arr[0]];
  var length = (arr[1] - arr[0]);
  var i = 1;

  // Creates range from input
  while (i <= length) {
    range.push(arr[0] + i);
    i++;
  }

  var count = {two: 0, three: 0, five: 0, seven: 0, eleven: 0, thirteen: 0}; 
  var keys = Object.keys(count);
  var numbers = [2, 3, 5, 7, 11, 13];
  var loop = 1;

  function checkOne(item, index){
    return item == 1;
  }
  var rLength = range.length;
  var nLength = numbers.length;

  // Smallest common multiple calculation 
  while (range.every(checkOne) !== true) {
    for (j = 0; j < rLength; j++) {
      for (y = 0; y < nLength; y++) {  
        if (range[j] % numbers[y] === 0) {
          count[keys[y]] = loop;
          range[j] = range[j]/numbers[y];
        } 
      }
    }
    loop ++
  }

  // Multiply for result
  var result = [];
  for (x = 0; x < nLength; x++) {
    if (count[keys[x]] !== 0) {
      result.push(Math.pow(numbers[x], count[keys[x]]));
    }

  }
  return result.reduce(function(a, b){return a * b});
}

smallestCommons([1,13]);

