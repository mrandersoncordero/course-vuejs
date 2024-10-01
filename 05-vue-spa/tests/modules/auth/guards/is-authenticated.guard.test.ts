import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard"
import type { RouteLocationNormalized } from "vue-router"

describe('is-authenticated.guard', () => {

    const to: RouteLocationNormalized = {
        name: undefined,
        params: {},
        matched: [],
        fullPath: "",
        query: {},
        hash: "",
        redirectedFrom: undefined,
        path: "/home",
        meta: {}
    }

    const from: any = {}
    const next = vi.fn()

    beforeEach(() => {
        localStorage.clear();
    })

    test('should block is not authenticated', async () => {

        await isAuthenticatedGuard(to, from, next)

        expect(next).toHaveBeenCalledWith({
            name: 'login'
        });
    })
    
    test('should called localStorage set item lastPath', async () => {

        await isAuthenticatedGuard(to, from, next)

        const lastPath = localStorage.getItem('lastPath');

        expect(lastPath).toBe(to.path)
    })
})