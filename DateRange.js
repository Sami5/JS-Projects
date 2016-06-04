// Create easy to read date ranges
// "Friendly Date Ranges" freeCodeCamp Algorithm Exercise

function makeFriendlyDates(arr) {

  const currentYear = new Date().getUTCFullYear();

  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const firstDate = new Date(arr[0]).getUTCDate(); 
  const firstMonth = new Date(arr[0]).getUTCMonth();
  const firstYear = new Date(arr[0]).getUTCFullYear();

  const secDate = new Date(arr[1]).getUTCDate();
  const secMonth = new Date(arr[1]).getUTCMonth();
  const secYear = new Date(arr[1]).getUTCFullYear();

  let result = [];

  // Test to see if the date range is less than a year
  function lessThanYear() {
    if (secYear - firstYear < 1){
      return true;
    } else if (secYear - firstYear === 1) {
      if (firstMonth - secMonth > 0){
        return true;
      } else if (firstDate - secDate > 0){
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  // Convert cardinal number to ordinal number 
  function ordinal(ord) {
    const ordList = ["st", "nd", "rd", "th"];
    if (!([1, 2, 3, 21, 22, 23, 31].includes(ord))) {
      return `${ord}${ordList[3]}`;
    } else if ([1, 21, 31].includes(ord)) {
      return `${ord}${ordList[0]}`;
    } else if ([2, 22].includes(ord)) {
      return `${ord}${ordList[1]}`;
    } else {
      return `${ord}${ordList[2]}`;
    } 
  }

  // Logic to display the correct date format
  if (firstYear === currentYear) { 
    // If the year starts at the current year do the following
    if (firstYear === secYear && firstMonth === secMonth){
      result.push(`${month[firstMonth]} ${ordinal(firstDate)}`);
      result.push(`${ordinal(secDate)}`);

    } else if (lessThanYear()) {
      result.push(`${month[firstMonth]} ${ordinal(firstDate)}`);
      result.push(`${month[secMonth]} ${ordinal(secDate)}`);

    } else {
      result.push(`${month[firstMonth]} ${ordinal(firstDate)}, ${firstYear}`);
      result.push(`${month[secMonth]} ${ordinal(secDate)}, ${secYear}`);
    }

  } else if (arr[0] === arr[1]) {
    result.push(`${month[firstMonth]} ${ordinal(firstDate)}, ${firstYear}`);

  } else if (lessThanYear()) {
    result.push(`${month[firstMonth]} ${ordinal(firstDate)}, ${firstYear}`);
    result.push(`${month[secMonth]} ${ordinal(secDate)}`);

  } else if (firstYear === secYear && firstMonth === secMonth) {
    result.push(`${month[firstMonth]} ${ordinal(firstDate)}, ${firstYear}`);
    result.push(`${ordinal(secDate)}`);

  } else {
    result.push(`${month[firstMonth]} ${ordinal(firstDate)}, ${firstYear}`);
    result.push(`${month[secMonth]} ${ordinal(secDate)}, ${secYear}`);
  }

  return result;
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]);

