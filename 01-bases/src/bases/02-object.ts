export const person = {
  lastName: "Stark",
  age: 45,
  address: {
    city: 'New York',
    zip: 51323,
    lat: 14.2333,
    lng: 34.4546
  }
}; // as const

person.age = 55;

// const person2 = {...person};
const person2 = structuredClone(person);

person2.lastName = 'Parket';
person2.address.city = 'LA';

console.log({person});
console.log({person2});
