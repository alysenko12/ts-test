let infoAddress: {
    officeId: number;
    isOpened: boolean;
    contacts: {
        phone: string;
        email: string;
        address: {
            city: string
        }
    }
}

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
}

function getInfo(infoAddres: object) {
    return infoAddres
}

console.log(getInfo(address))

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