const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [ g, v, t, g2, g3 = 'Yamoshi' ] = character;
console.log({g, v, t, g2, g3});

const retunrArray = () => {
    return [123, 'ABC'] as const;
}

const [numbers, letters] = retunrArray();

console.log(numbers * 2, letters.toLocaleLowerCase());
