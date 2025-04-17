import LazyLoad from "@/components/LazyLoad";
import { AllPostPageLazyLoadElement, PendingPostPageLazyLoadElement } from "@/constants/LazyLoadElement";


const listingRoute = [
    {
        path: "/admin/posts",
        element: <LazyLoad component={AllPostPageLazyLoadElement} />
    },
    {
        path: "/admin/pending-posts",
        element: <LazyLoad component={PendingPostPageLazyLoadElement} />
    }
]

export default listingRoute;