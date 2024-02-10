function checkSharedKeyValuePairs(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            return true;
        }
    }
    return false;
}
