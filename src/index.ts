import { flattenArray } from "./modules/flattenArray"

const originalArray = [["one", "two", ["three"]], "four"]
const finalArray = flattenArray(originalArray)

console.log(finalArray) // Expected: ["one", "two", "three", "four"]
