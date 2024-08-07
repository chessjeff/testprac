function capitalize(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  const rest = string.slice(1, string.length);
  return firstLetter + rest;
}

function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed.concat(string.at(i));
  }
  return reversed;
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    if (b !== 0) {
      return a / b;
    }
  },
  multiply: (a, b) => {
    return a * b;
  },
};

function caesarCipher(string, shift) {
  let cipher = "";
  const lowers = "abcdefghijklmnopqrstuvwxyz";
  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < string.length; i++) {
    let char = string.at(i);
    let index = 0;
    if (!lowers.includes(char) && !uppers.includes(char)) {
      cipher += char;
    }
    if (lowers.includes(char)) {
      index = lowers.indexOf(char) + shift;
      if (index > 25) index = index % 26;
      char = lowers.at(index);
      cipher += char;
    }
    if (uppers.includes(char)) {
      index = uppers.indexOf(char) + shift;
      if (index > 25) index = index % 26;
      char = uppers.at(index);
      cipher += char;
    }
  }
  return cipher;
}

function analyzeArray(array) {
  let object =  {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
  
  return object;

  function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

  function getMin(array) {
    return Math.min.apply(null, array);
  }

  function getMax(array) {
    return Math.max.apply(null, array);
  }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
