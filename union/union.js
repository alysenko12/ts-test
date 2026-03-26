"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logId(id) {
    if (typeof id == 'string') {
        console.log(id.toLowerCase);
    }
    else if (typeof id == 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
}
function logMultIds(a, b) {
    if (a == b) {
    }
    else {
        console.log(a);
    }
}
//# sourceMappingURL=union.js.map