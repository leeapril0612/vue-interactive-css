export default [
    {
        path: '/vue/recode1',
        name: 'vue/recode1',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/vue/recode1.vue')
    },
    {
        path: '/vue/star',
        name: 'vue/star',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/vue/star.vue')
    },
    {
        path: '/vue/card1',
        name: 'vue/card1',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/vue/card1.vue')
    },
    {
        path: '/vue/card2',
        name: 'vue/card2',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/vue/card2.vue')
    }
]