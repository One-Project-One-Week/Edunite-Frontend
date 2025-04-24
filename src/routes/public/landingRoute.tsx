import LazyLoad from "@/components/LazyLoad";
import { LandingPageLazyLoadElement } from "@/constants/LazyLoadElement";

const landingRoute = [
    {
        path: "/",
        element: <LazyLoad component={LandingPageLazyLoadElement} />
    },
    
]

export default landingRoute;