// Cash register that gives exact change 
// "Exact Change" freeCodeCamp Algorithm Exercise

function checkCashRegister(price, cash, cid) {
  var change = [];
  var cashReg = cid;
  var changeNeeded = cash - price;
  var totalCash = parseFloat((cid.reduce((acc, item) => acc + item[1], 0)).toFixed(2));
  const denomLength = cid.length;
  const denom = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100]; // List of denominations 

  if (totalCash < changeNeeded) {
    return "Insufficient Funds";
  } else if (totalCash === changeNeeded) {
    return "Closed";
  }

  for (i = denomLength - 1; i >= 0; i--) {
    if (changeNeeded >= denom[i] && cashReg[i][1] > 0) {
      let need = parseFloat((changeNeeded / denom[i]).toFixed(2)); // Amount of change needed in current denomination 
      let have = cashReg[i][1] / denom[i]; // Amount of current denomintion available in register 

      if (need > have) {
        let haveAmount = have * denom[i];
        changeNeeded -= haveAmount; // Update change required
        cashReg[i][1] -= haveAmount; // Update cash register
        change.push([cashReg[i][0], haveAmount]); // Push denomination details to final change array 
      } else {
        let needAmount = Math.floor(need) * denom[i];
        changeNeeded -= needAmount; // Update change required
        cashReg[i][1] -= needAmount; // Update cash register
        change.push([cashReg[i][0], needAmount]); // Push denomination details to final change array 
      }
    }
  } 
  if (changeNeeded > 0) {
    return "Insufficient Funds";
  }
  return change;
}
checkCashRegister(3.26, 100.00, 
    [["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.10], 
    ["QUARTER", 4.25], 
    ["ONE", 90.00], 
    ["FIVE", 55.00], 
    ["TEN", 20.00], 
    ["TWENTY", 60.00], 
    ["ONE HUNDRED", 100.00]]);

