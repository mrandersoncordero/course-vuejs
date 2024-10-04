import App from "@/App.vue";
import router from "@/router";
import { mount } from "@vue/test-utils"
import type { RouteLocationNormalized } from "vue-router";

describe('Router', () => {

    const wrapper = mount(App, {
        global: {
            plugins: [router],
        }
    });

    test('renders HomePage when visiting /', async () => {
        await router.replace('/');
        await router.isReady();

        // console.log(wrapper.html())
        expect(wrapper.html()).toContain('Bienvenido a nuestro sitio web')
    })

    test('renders FeaturesPage when visiting /features', async () => {
        await router.replace('/features');
        await router.isReady();

        // console.log(wrapper.html())
        expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom')
        
        // await router.replace('/');
        // await router.push({ name: 'features' });
        // expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom')
    })

    test('renders PricingPage when visiting /pricing', async () => {
        await router.replace('/pricing');
        await router.isReady();

        // console.log(wrapper.html())
        expect(wrapper.html()).toContain('Flexible')
    })

    test('renders ContactPage when visiting /contact', async () => {
        await router.replace('/contact');
        await router.isReady();

        // console.log(wrapper.html())
        expect(wrapper.html()).toContain('Feedback')
    })

    test('renders LoginPage when visiting /pokemon/:id with no authenticated', async () => {
        localStorage.clear();
        await router.replace('/pokemon/151');
        await router.isReady();

        // console.log(wrapper.html())
        expect(wrapper.find('h1').text()).toContain('Login')
    })

    test('renders PokemonPage when visiting /pokemon/:id with authentication', async () => {
        localStorage.setItem('userId', 'ABC-123');
        const pokemonId = 125;

        await router.replace(`/pokemon/${pokemonId}`); 
        await router.isReady();

        // console.log(wrapper.find('img'))
        expect(wrapper.find('h1').text()).toContain(`Pokemon #${pokemonId}`)
        expect(wrapper.html()).toContain(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg`)
    })

    test('should convert the segment into numbers', async () => {
        const route: RouteLocationNormalized = {
            name: undefined,
            params: {id: '2'},
            matched: [],
            fullPath: "/pokemon/2",
            query: {},
            hash: "",
            redirectedFrom: undefined,
            meta: {},
            path: ''
        }

        const pokemonRoute = router.getRoutes().find((route) => route.name ==='pokemon')
        // console.log(pokemonRoute);

        const props = (pokemonRoute?.props as any).default(route)
        console.log({props});
        
        expect( pokemonRoute ).toBeTruthy()
        expect(props.id).toBe(2)
    })

    test('should return default value if argument is not a number', async () => {
        const route: any = {
            fullPath: "/pokemon/2",
            params: {id: '2abc'},
        }

        const pokemonRoute = router.getRoutes().find((route) => route.name ==='pokemon')
        // console.log(pokemonRoute);

        const props = (pokemonRoute?.props as any).default(route)
        console.log({props});
        
        expect( pokemonRoute ).toBeTruthy()
        expect(props.id).toBe(1)
    })
})