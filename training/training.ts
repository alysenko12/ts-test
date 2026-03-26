const product1: {
    name: string;
    price: number;
    inStock: boolean;
} = {
    name: 'Ноутбук',
    price: 45000,
    inStock: true
};

const product2: {
    name: string;
    price: number;
    inStock: boolean;
} = {
    name: 'Стул',
    price: 5000,
    inStock: false
}

console.log(`Название: ${product1.name}`);
console.log(`Цена: ${product1.price} ₽`);
console.log(`В наличии: ${product1.inStock ? 'Да' : 'Нет'}`);

console.log(`Название: ${product2.name}`);
console.log(`Цена: ${product2.price} ₽`);
console.log(`В наличии: ${product2.inStock ? 'Да' : 'Нет'}`);