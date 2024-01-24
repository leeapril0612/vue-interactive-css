export default [
    {
        path: '/vue/recode1',
        name: 'vue/recode1',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/vue/recode1.vue')
    }
]