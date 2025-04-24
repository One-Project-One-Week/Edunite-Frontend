import { createBrowserRouter } from "react-router-dom";
import authRoute from "./auth/AuthRoute";
import publicRoute from "./public/PublicRoute";
import adminRoute from "./admin/adminRoute";
import dashboardRoute from "./dashboard/DashboardRoute";



const router = createBrowserRouter([
    {
        errorElement: <div>404</div>
    },

    ...authRoute,
    ...adminRoute,
    ...publicRoute,
    ...dashboardRoute,
]);

export default router;