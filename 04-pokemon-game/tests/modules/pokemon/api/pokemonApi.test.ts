import { pokemonApi } from "@/modules/pokemon/api/pokemonApi";
import { describe, expect, test } from "vitest"

describe('pokemonApi', () => {
    test('check the baseurl', () => {
       const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

       expect(pokemonApi.defaults.baseURL).toBe(baseUrl);
    });
})
