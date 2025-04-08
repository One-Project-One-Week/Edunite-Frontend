import LazyLoad from "@/components/LazyLoad";
import { PublicLayout } from "@/constants/LazyLoadElement";

const publicLayout = [
    {
        path: '/',
        element: <LazyLoad component={PublicLayout} />
    }
]


export default publicLayout;