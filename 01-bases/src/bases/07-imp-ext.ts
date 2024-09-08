import heroes, { type Owner } from "../data/heroes";

export const getHeroeById = (id: number) => {
  return heroes.find((hero) => hero.id === id); 
};
console.log(getHeroeById(1));

export const getHeroesByOwner = (owner: Owner) => {
    return heroes.filter( hero => hero.owner === owner)
}

console.log(getHeroesByOwner('Marvel'));

