import MessageBox from "@/chat/MessageBox.vue";
import { mount } from "@vue/test-utils";


describe('<MessageBox />', () => {

    test('renders input and button elements correctly', () => {
        const wrapper = mount(MessageBox);

        expect(wrapper.html()).toMatchSnapshot(); // evaluamos que el componente siga igual a como se creo

        expect( wrapper.find('input[type="text"]').exists()).toBe(true); // evaluamos que exista un input de tipo 'text'
        expect( wrapper.find('button ').exists()).toBe(true); // evaluamos que exista un elemento de button
        expect(wrapper.find('button svg').exists()).toBe(true) // evaluamos que el button contenga dentro un elemento svg
    });
})