import LazyLoad from "@/components/LazyLoad";
import { AllPostPageLazyLoadElement } from "@/constants/LazyLoadElement";


const listingRoute = [
    {
        path: "/admin/posts",
        element: <LazyLoad component={AllPostPageLazyLoadElement} />
    }
]

export default listingRoute;