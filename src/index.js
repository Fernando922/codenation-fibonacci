"use strict";

let values = [0, 1];
const fibonacci = () => {
  while (values[values.length - 1] < 350) {
    values.push(values[values.length - 1] + values[values.length - 2]);
  }
  return values;
};

const isFibonnaci = (num) => values.includes(num)

module.exports = {
  fibonacci,
  isFibonnaci,
};
