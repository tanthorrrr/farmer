import Home from '~/pages/Home';
import upProduct from '~/pages/upProduct';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layouts';
import Search from '~/pages/Search';
import Blog from '~/pages/admin/Blog';

import config from '~/config';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import ForgotPassword from '~/pages/ForgotPassword';
import HeaderAndSidebar from '~/layouts/HeaderAndSidebar';
//public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: HeaderOnly,
    },
    {
        path: config.routes.upProduct,
        component: upProduct,
        layout: HeaderAndSidebar,
    },
    {
        path: config.routes.profile,
        component: Profile,
        layout: HeaderOnly,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.upBlog,
        component: Blog,
        layout: HeaderAndSidebar,
    },

    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
    {
        path: config.routes.register,
        component: Register,
        layout: null,
    },
    {
        path: config.routes.resetPassword,
        component: ForgotPassword,
        layout: null,
    },
];
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
