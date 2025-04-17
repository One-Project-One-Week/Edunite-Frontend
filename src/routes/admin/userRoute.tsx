import LazyLoad from "@/components/LazyLoad";
import { AllUserPageLazyLoadElement } from "@/constants/LazyLoadElement";

const userRoute = [
    {
        path: '/admin/users',
        element: <LazyLoad component={AllUserPageLazyLoadElement} />
    }
]

export default userRoute;