import MessageBox from '@/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);

  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot(); // evaluamos que el componente siga igual a como se creo

    expect(wrapper.find('input[type="text"]').exists()).toBe(true); // evaluamos que exista un input de tipo 'text'
    expect(wrapper.find('button ').exists()).toBe(true); // evaluamos que exista un elemento de button
    expect(wrapper.find('button svg').exists()).toBe(true); // evaluamos que el button contenga dentro un elemento svg
  });

  test('emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola mundo';

    await wrapper.find('input[type="text"]').setValue(message); // asignamos un valor al input
    await wrapper.find('button').trigger('click'); // ejecutamos el trigger de click

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]); // evaluamos que el valor emitido sea igual a message

    expect((wrapper.vm as any).message).toBe(''); // evaluamos que el valor de message cambie a vacio
  });
});
