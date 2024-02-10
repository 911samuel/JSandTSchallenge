"use strict";
function shiftArrayLeft(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const firstElement = arr.shift();
    if (firstElement !== undefined) {
        arr.push(firstElement);
    }
    return arr;
}
