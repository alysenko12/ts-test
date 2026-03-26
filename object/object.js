"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let infoAddress;
const address = {
    "officeId": 45,
    "isOpened": 123,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москвасити"
        }
    }
};
function getInfo(infoAddres) {
    return infoAddres;
}
console.log(getInfo(address));
/*
{
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
}*/ 
//# sourceMappingURL=object.js.map