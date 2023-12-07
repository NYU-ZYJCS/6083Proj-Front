import SetOrder from "./components/SetOrder/SetOrder";
import Login from  "./components/Login/Login"
import Register from "./components/Login/Register";

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/set_order', component: SetOrder },

]

export default routes;