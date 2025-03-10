"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenArray = void 0;
const flattenArray = (array) => {
    return array.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? (0, exports.flattenArray)(item) : item);
    }, []);
};
exports.flattenArray = flattenArray;
