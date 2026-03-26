interface User {
    name: string,
    age: number,
    skills: string[],

    Log: (id: number) => string;
}

interface Role {
    roleId: number
}

interface userWithRole extends User, Role {
    createdAt: Date
}

let user: userWithRole = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),

    Log(id) {
        return '';
    }
}

interface userDictionary {
    [index: number]: User
}

