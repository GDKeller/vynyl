"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flattenArray_1 = require("../src/modules/flattenArray");
describe("flattenArray", () => {
    it("flattens a nested array into an array of strings", () => {
        const input = [["one", "two", ["three"]], "four"];
        const expectedOutput = ["one", "two", "three", "four"];
        expect((0, flattenArray_1.flattenArray)(input)).toEqual(expectedOutput);
    });
    it("returns an empty array when given an empty array", () => {
        expect((0, flattenArray_1.flattenArray)([])).toEqual([]);
    });
});
