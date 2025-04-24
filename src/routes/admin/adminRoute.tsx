import LazyLoad from "@/components/LazyLoad";
import { AdminLayoutLazyLoadElement } from "@/constants/LazyLoadElement";
import userRoute from "./userRoute";
import requestRoute from "./requestRoute";
import courseRoute from "./courseRoute";


const adminRoute = [
    {
        path: '/admin',
        element: (
            <ProtectedRoute>
                <LazyLoad component={AdminLayoutLazyLoadElement} />
            </ProtectedRoute>
        ),
        children: [
            ...userRoute,
            ...courseRoute,
            ...requestRoute
        ]
    }
]

export default adminRoute;