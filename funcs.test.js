import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./funcs.js";

test("capitalize the first letter", () => {
  const str = "string";
  expect(capitalize(str)).toBe("String");
});

test("reverse a given string", () => {
  const str = "string";
  expect(reverseString(str)).toBe("gnirts");
});

test("primitive operations on two numbers", () => {
  const a = 30;
  const b = 5;
  expect(calculator.add(a, b)).toBe(35);
  expect(calculator.subtract(a, b)).toBe(25);
  expect(calculator.divide(a, b)).toBe(6);
  expect(calculator.multiply(a, b)).toBe(150);
});

test("caesar cipher", () => {
  const cases = [
    { string: "xyz", shift: 3, return: "abc" },
    { string: "HeLLo", shift: 3, return: "KhOOr" },
    { string: "Hello, World!", shift: 3, return: "Khoor, Zruog!" },
  ];
  for (let i = 0; i < cases.length; i++) {
    expect(caesarCipher(cases[i].string, cases[i].shift)).toBe(cases[i].return);
  }
});

test("analyze given array", () => {
  const array = [1, 8, 4, 3, 2, 6];
  const object = { 'average': 4, 'min': 1, 'max': 8, 'length': 6 }
  expect(analyzeArray(array)).toEqual(object);
});
