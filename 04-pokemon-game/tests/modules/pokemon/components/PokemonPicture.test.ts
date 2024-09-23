import PokemonPicture from "@/modules/pokemon/components/PokemonPicture.vue";
import { describe, expect, test } from "vitest";
import { mount } from '@vue/test-utils';

describe('<PokemonPicture />', () => {
    const pokemonId = 25;
    const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
        
    test('should render the hidden image when showPokemon prop is false', () => {
        const wrapper = mount(PokemonPicture, {
            props: { pokemonId, showPokemon: false, },
        });
        // console.log(wrapper.html());

        const image = wrapper.find('img');
        const attributes = image.attributes();

        console.log(image.attributes());
        
        // evaluamos el source de la imagen
        expect( image.attributes('src')).toBe(imageSource);
        // evaluamos los atributos
        expect( attributes ).toEqual(
            expect.objectContaining({
                class: 'img brightness-0',
                src: imageSource
            })
        );
    })

    test('should render the hidden image when showPokemon prop is true', () => {
        const wrapper = mount(PokemonPicture, {
            props: { pokemonId, showPokemon: true, },
        });
        
        // console.log(wrapper.html());

        const image = wrapper.find('img');
        const attributes = image.attributes();

        console.log(image.attributes());
        
        // evaluamos el source de la imagen
        expect( image.attributes('src')).toBe(imageSource);
        // evaluamos los atributos
        expect( attributes ).toEqual(
            expect.objectContaining({
                class: 'fade-in img',
                src: imageSource
            })
        );
    })
})