import LazyLoad from "@/components/LazyLoad";
import { AdminLayoutLazyLoadElement } from "@/constants/LazyLoadElement";
import userRoute from "./userRoute";
import listingRoute from "./listingRoute";
import ProtectedRoute from "@/components/ProtectedRoute";
import AdminHome from "@/pages/admin/AdminHome";

const adminRoute = [
    {
        path: '/admin',
        element: (
            <ProtectedRoute>
                <LazyLoad component={AdminLayoutLazyLoadElement} />
            </ProtectedRoute>
        ),
        children: [
            {
                index : true,
                element :<AdminHome/>
            },
            ...userRoute,
            ...listingRoute
        ]
    }
]

export default adminRoute;