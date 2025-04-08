import { createBrowserRouter } from "react-router-dom";
import authRoute from "./auth/AuthRoute";
import publicLayout from "./public/PublicRoute";


const router = createBrowserRouter([
    {
        errorElement: <div>404</div>
    },
    ...authRoute,
    ...publicLayout
]);

export default router;