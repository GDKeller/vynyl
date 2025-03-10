import { flattenArray } from '../src/modules/flattenArray';

describe("flattenArray", () => {
    it("flattens a nested array into an array of strings", () => {
        const input = [["one", "two", ["three"]], "four"];
        const expectedOutput = ["one", "two", "three", "four"];
        expect(flattenArray(input)).toEqual(expectedOutput);
    });

    it("returns an empty array when given an empty array", () => {
        expect(flattenArray([])).toEqual([]);
    });
});
