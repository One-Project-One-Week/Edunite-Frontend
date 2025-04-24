import LazyLoad from "@/components/LazyLoad";
import { CourseDatailPageLazyLoadElement, ListingAllCoursePageLazyLoadElement } from "@/constants/LazyLoadElement";


const courseRoute = [
    {
        path: '/admin/courses',
        element: <LazyLoad component={ListingAllCoursePageLazyLoadElement} />
    },
    {
        path: '/admin/courses/:id/:title',
        element: <LazyLoad component={CourseDatailPageLazyLoadElement} />
    }
]


export default courseRoute;