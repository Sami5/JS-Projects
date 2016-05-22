// Update current inventory with new stock
// "Inventory Update" freeCodeCamp Algorithm Excerise 

function updateInventory(arr1, arr2) {
  var myInv = arr1;
  const myItemNames = arr1.map(item => item[1]); // Makes searching for current inventory names easier

  arr2.forEach(item => {
    if (myItemNames.indexOf(item[1]) >= 0) {
      myInv[myItemNames.indexOf(item[1])][0] += item[0]; // If inventory item already exists, add quantity to current item 
    } else {
      myInv.push(item); // If inventory item doesn't exist, push the entire item to array
    }
  }
  );

  myInv.sort((a, b) => {
    let itemA = a[1].toLowerCase(), itemB = b[1].toLowerCase(); // Ensures case-insensitive sort
    return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0;
  }
  );

  return myInv;
}

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
