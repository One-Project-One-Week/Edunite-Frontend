import LazyLoad from "@/components/LazyLoad";
import { DashboardLayoutLazyLoadElement } from "@/constants/LazyLoadElement";
import studentListingRoute from "./studentRoute";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import teacherListingRoute from "./teacherRoute";

const dashboardRoute = [
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                 <LazyLoad component={DashboardLayoutLazyLoadElement}/>,
            </ProtectedRoute>
        ),
        children: [
            {
                index : true,
                element: <DashboardHome/>
            },
            
            ...studentListingRoute,
            ...teacherListingRoute

        ]
    }
]


export default dashboardRoute;