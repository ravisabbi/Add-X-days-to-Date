const startDate = require("./index.js");

let year = startDate.getFullYear();
let month = startDate.getMonth();
let day = startDate.getDate();
const addDays = require("date-fns/addDays");
function getNewDate(y, m, d, x) {
  const newDate = addDays(new Date(y, m, d), x);
  return newDate;
}
console.log(getNewDate(year, month, day, 6));
