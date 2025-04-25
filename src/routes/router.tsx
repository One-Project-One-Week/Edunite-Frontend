import { createBrowserRouter } from "react-router-dom";
import authRoute from "./auth/AuthRoute";
import publicRoute from "./public/PublicRoute";
import adminRoute from "./admin/adminRoute";
import teacherRoute from "./teacher/teacherRoute";
import studentRoute from "./student/studentRoute";



const router = createBrowserRouter([
    {
        errorElement: <div>404</div>
    },
    ...authRoute,
    ...adminRoute,
    ...publicRoute,
    ...teacherRoute,
    ...studentRoute,
]);

export default router;