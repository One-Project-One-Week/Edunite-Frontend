import { createBrowserRouter } from "react-router-dom";
import authRoute from "./auth/AuthRoute";
import publicRoute from "./public/PublicRoute";
import adminRoute from "./admin/adminRoute";


const router = createBrowserRouter([
    {
        errorElement: <div>404</div>
    },
    ...authRoute,
    ...publicRoute,
    ...adminRoute,
]);

export default router;