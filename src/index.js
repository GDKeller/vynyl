"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flattenArray_1 = require("./modules/flattenArray");
const originalArray = [["one", "two", ["three"]], "four"];
const finalArray = (0, flattenArray_1.flattenArray)(originalArray);
console.log(finalArray); // Expected: ["one", "two", "three", "four"]
