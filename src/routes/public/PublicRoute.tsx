import LazyLoad from "@/components/LazyLoad";
import { PublicLayoutLazyLoadElement } from "@/constants/LazyLoadElement";

const publicRoute = [
    {
        path: '/',
        element: <LazyLoad component={PublicLayoutLazyLoadElement} />
    }
]


export default publicRoute;