import LazyLoad from "@/components/LazyLoad";
import { AdminLayoutLazyLoadElement } from "@/constants/LazyLoadElement";
import userRoute from "./userRoute";
import listingRoute from "./listingRoute";

const adminRoute = [
    {
        path: '/admin',
        element: <LazyLoad component={AdminLayoutLazyLoadElement} />,
        children: [
            ...userRoute,
            ...listingRoute
        ]
    }
]

export default adminRoute;