import { createBrowserRouter } from "react-router-dom";
import authRoute from "./auth/AuthRoute";
import publicRoute from "./public/PublicRoute";


const router = createBrowserRouter([
    {
        errorElement: <div>404</div>
    },
    ...authRoute,
    ...publicRoute
]);

export default router;