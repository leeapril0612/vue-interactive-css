export default [
    {
        path: '/legacy/recode1',
        name: 'legacy/recode1',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/legacy/recode1.vue')
    }
]