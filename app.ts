type Combinable = number | string;
type Conversion = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: Conversion
) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(10, 12, 'as-number');
console.log(combineAges);

const combineAgesString = combine('10', '12', 'as-number');
console.log(combineAges);

const combineNames = combine("aras", "opraza", 'as-text');
console.log(combineNames);