import routes from "../config/routes";

//Pages
import { Home, Account } from "../pages";

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.account, component: Account },
];

export default publicRoutes;
