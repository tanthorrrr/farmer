const routes = {
    home: '/',
    search: '/search',
    blog: '/blog',
    profile: '/@:nickname',
    feedback: '/feedback',
    setting: '/setting',
    login: '/login',
    register: '/register',
    resetPassword: '/forgot-password',

    //farmer
    upProduct: '/farmer/product',
    //agent
    upBlog: '/agent/blog',
    //admin
    dashboard: 'dashboard',

    // farmer vs agent : home ,search , profile ,setting , { language },blog,profile,feedback,
    //farmer : up product,
    // agent : post blog ,
    // admin : dashboard ,
};
export default routes;
