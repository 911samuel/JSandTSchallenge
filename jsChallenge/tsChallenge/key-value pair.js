"use strict";
function checkSharedKeyValuePairs(obj1, obj2) {
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            return true;
        }
    }
    return false;
}
