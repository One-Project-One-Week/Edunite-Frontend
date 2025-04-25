import { createBrowserRouter } from "react-router-dom";
import authRoute from "./auth/AuthRoute";
import publicRoute from "./public/PublicRoute";
import adminRoute from "./admin/adminRoute";
import dashboardRoute from "./dashboard/DashboardRoute";
import { PageWrapper } from "@/components/PageWrapper";

function wrapRoutesWithAnimation(routes : any) {
    return routes.map((route : any) => ({
      ...route,
      element: <PageWrapper>{route.element}</PageWrapper>,
      children: route.children ? wrapRoutesWithAnimation(route.children) : undefined,
    }));
  }

const router = createBrowserRouter([
    {
        errorElement: <div>404</div>
    },

    ...wrapRoutesWithAnimation(authRoute),
    ...wrapRoutesWithAnimation(adminRoute),
    ...wrapRoutesWithAnimation(publicRoute),
    ...wrapRoutesWithAnimation(dashboardRoute),
]);

export default router;