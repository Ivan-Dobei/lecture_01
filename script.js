// task 1
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('----------------');

let index = 1;
while(index <= 10) {
    console.log(index);
    index++;
}

// task 2
let array = [1, 'string', true, null, undefined, {name: "obj"}, 'string again', 23, false, 33];

array.forEach(item => {
    console.log(typeof item);
})
console.log('----------------');

for(let i = 0; i < 10; i++) {
    console.log(typeof array[i]);
}
console.log('----------------');

let arrayIndex = 0;
while (arrayIndex < 10) {
    console.log(typeof array[arrayIndex]);
    arrayIndex++;
}
console.log('----------------');

arrayIndex = 0;
do {
    console.log(typeof array[arrayIndex]);
    arrayIndex++;
} while (arrayIndex < 10);
console.log('----------------');

//task 3
let peopleList = [
    {
        name: 'Jenny',
        age: 17,
        pets: ['cat', 'dog']
    },
    {
        name: 'Nick',
        age: 23,
        pets: ['snake']
    },
    {
        name: 'Cris',
        age: 14,
        pets: ['hamster']
    },
    {
        name: 'Jameson',
        age: 34,
        pets: ['dog', 'mini pig']
    }
];

console.log(peopleList.filter(person => person.age >= 20));
console.log('----------------');

//task 4
peopleList.map(person => {
    person.pets.push('parrot');
})

console.log(peopleList);
console.log('----------------');

//task 5
let numberArray = new Array(10).fill(42);
numberArray.splice(4, 0, "answer");
console.log(array.find(element => element === "answer"));

console.log('----------------');

//task 6

const gameCharacter = {
    name: 'Aragorn',
    class: 'Ranger',
    level: 15,
    health: 100,
    inventory: {
        sword: 'Steel sword',
        shield: 'Wooden Shield',
        potions: 5
    },
    abilities: ['Stealth', 'Sword Mastery', 'Tracking']
};

const inventoryKeys = Object.keys(gameCharacter.inventory);
console.log('Inventory Keys:', inventoryKeys);

const hasAbilities = Object.hasOwn(gameCharacter, 'abilities');
console.log('Has abilities:', hasAbilities);

const hasMagic = Object.hasOwn(gameCharacter, 'magic');
console.log('Has magic:', hasMagic);

const characterValues = Object.values(gameCharacter);
console.log('Character Values:', characterValues);

const hasStealth = gameCharacter.abilities.includes('Stealth');
console.log('Has Stealth Ability:', hasStealth);