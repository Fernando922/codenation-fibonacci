"use strict";


const fibonacci = () => {
  let values = [0, 1];
  while (values[values.length - 1] < 350) {
    values.push(values[values.length - 1] + values[values.length - 2]);
  }
  return values;
};

const isFibonnaci = (num) => {
  let values = fibonacci()
  return values.includes(num)
}

module.exports = {
  fibonacci,
  isFibonnaci,
};
