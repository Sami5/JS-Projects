// Smallest Common Multiple using Prime Factorisation

function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  var range = [arr[0]];
  var length = (arr[1] - arr[0]);
  var i = 1;

  // Creates range from input
  while (i <= length) {
    range.push(arr[0] + i);
    i++;
  }

  // More prime numbers can be added to increase capacity if required
  var count = {two: 0, three: 0, five: 0, seven: 0, eleven: 0, thirteen: 0, seventeen: 0, nineteen: 0}; 
  const primes = [2, 3, 5, 7, 11, 13, 17, 19];
  var keys = Object.keys(count);
  var loop = 1;

  var rLength = range.length;
  var pLength = primes.length;

  // Function used to check that every item in the range has been reduced to
  // 1 and therefore all prime factors identified
  function checkOne(item, index){
    return item == 1;
  }

  // Smallest common multiple calculation 
  while (range.every(checkOne) !== true) {
    for (j = 0; j < rLength; j++) {
      for (y = 0; y < pLength; y++) {  
        if (range[j] % primes[y] === 0) {
          count[keys[y]] = loop;
          range[j] = range[j]/primes[y];
        } 
      }
    }
    loop ++
  }

  // Multiply for result
  var result = [];
  for (x = 0; x < pLength; x++) {
    if (count[keys[x]] !== 0) {
      result.push(Math.pow(primes[x], count[keys[x]]));
    }

  }
  return result.reduce((a, b) => a * b);
}

smallestCommons([1,13]);

