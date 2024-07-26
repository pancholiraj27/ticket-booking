// data.js
const questions = [
  {
    question: "1 === 1",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "1 === '1'",
    options: ["true", "false"],
    answer: false,
  },
  {
    question: "typeof NaN",
    options: ["number", "string", "undefined", "object"],
    answer: "number",
  },
  {
    question: "'hello' === 'hello'",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "0 == false",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "0 === false",
    options: ["true", "false"],
    answer: false,
  },
  {
    question: "null == undefined",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "null === undefined",
    options: ["true", "false"],
    answer: false,
  },
  {
    question: "typeof undefined",
    options: ["number", "string", "undefined", "object"],
    answer: "undefined",
  },
  {
    question: "typeof null",
    options: ["number", "string", "undefined", "object"],
    answer: "object",
  },
  {
    question: "Array.isArray([])",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "Array.isArray({})",
    options: ["true", "false"],
    answer: false,
  },
  {
    question: "[] == false",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "[] === false",
    options: ["true", "false"],
    answer: false,
  },
  {
    question: "!![]",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "typeof 42",
    options: ["number", "string", "undefined", "object"],
    answer: "number",
  },
  {
    question: "typeof '42'",
    options: ["number", "string", "undefined", "object"],
    answer: "string",
  },
  {
    question: "typeof true",
    options: ["number", "string", "undefined", "boolean"],
    answer: "boolean",
  },
  {
    question: "typeof {}",
    options: ["number", "string", "undefined", "object"],
    answer: "object",
  },
  {
    question: "typeof Symbol()",
    options: ["number", "string", "undefined", "symbol"],
    answer: "symbol",
  },
  {
    question: "typeof function(){}",
    options: ["number", "string", "function", "object"],
    answer: "function",
  },
  {
    question: "typeof BigInt(123)",
    options: ["number", "string", "undefined", "bigint"],
    answer: "bigint",
  },
  {
    question: "'2' + 2",
    options: ["22", 4, "4", 2],
    answer: "22",
  },
  {
    question: "'2' - 2",
    options: ["22", 0, "0", NaN],
    answer: 0,
  },
  {
    question: "2 + true",
    options: [2, 3, "2true", "3true"],
    answer: 3,
  },
  {
    question: "2 - true",
    options: [2, 3, 1, "1"],
    answer: 1,
  },
  {
    question: "'5' * '2'",
    options: [10, "10", 52, "52"],
    answer: 10,
  },
  {
    question: "'5' / '2'",
    options: [2.5, "2.5", 2, "2"],
    answer: 2.5,
  },
  {
    question: "'5' % '2'",
    options: [1, "1", 0, "0"],
    answer: 1,
  },
  {
    question: "isNaN('hello')",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "isNaN(123)",
    options: ["true", "false"],
    answer: false,
  },
  {
    question: "isNaN('123')",
    options: ["true", "false"],
    answer: false,
  },
  {
    question: "parseInt('10')",
    options: [10, "10", NaN, "NaN"],
    answer: 10,
  },
  {
    question: "parseInt('10px')",
    options: [10, "10", NaN, "NaN"],
    answer: 10,
  },
  {
    question: "parseInt('px10')",
    options: [10, "10", NaN, "NaN"],
    answer: NaN,
  },
  {
    question: "parseFloat('10.5')",
    options: [10.5, "10.5", 10, "10"],
    answer: 10.5,
  },
  {
    question: "Number('10')",
    options: [10, "10", NaN, "NaN"],
    answer: 10,
  },
  {
    question: "Number('10.5')",
    options: [10.5, "10.5", 10, "10"],
    answer: 10.5,
  },
  {
    question: "Number('')",
    options: [0, "0", NaN, "NaN"],
    answer: 0,
  },
  {
    question: "Number(null)",
    options: [0, "0", NaN, "NaN"],
    answer: 0,
  },
  {
    question: "Number(undefined)",
    options: [0, "0", NaN, "NaN"],
    answer: NaN,
  },
  {
    question: "Number(true)",
    options: [1, "1", 0, "0"],
    answer: 1,
  },
  {
    question: "Number(false)",
    options: [0, "0", 1, "1"],
    answer: 0,
  },
  {
    question: "Boolean(0)",
    options: ["true", "false"],
    answer: false,
  },
  {
    question: "Boolean(1)",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "Boolean('')",
    options: ["true", "false"],
    answer: false,
  },
  {
    question: "Boolean(' ')",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "Boolean([])",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "Boolean({})",
    options: ["true", "false"],
    answer: true,
  },
  {
    question: "[1, 2, 3].length",
    options: [3, "3", 2, "2"],
    answer: 3,
  },
  {
    question: "Object.keys({a: 1, b: 2}).length",
    options: [2, "2", 1, "1"],
    answer: 2,
  },
];

export default questions;
