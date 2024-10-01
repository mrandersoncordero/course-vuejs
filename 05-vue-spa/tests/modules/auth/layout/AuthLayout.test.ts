import AuthLayout from "@/modules/auth/layouts/AuthLayout.vue"
import router from "@/router"
import { shallowMount } from "@vue/test-utils"
import { RouterView } from "vue-router"


describe('<AuthLayout />', () => {
    test('should be render correctly', () => {
        const wrapper = shallowMount(AuthLayout, {
            global: { plugins: [router]}
        })

        // console.log(wrapper.html());
        const routerComponent = wrapper.findComponent(RouterView)

        expect(routerComponent.exists()).toBe(true)
    })
})