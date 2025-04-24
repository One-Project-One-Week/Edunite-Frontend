import LazyLoad from "@/components/LazyLoad";
import { ListingAllCoursePageLazyLoadElement } from "@/constants/LazyLoadElement";


const courseRoute = [
    {
        path: '/admin/courses',
        element: <LazyLoad component={ListingAllCoursePageLazyLoadElement} />
    }
]


export default courseRoute;