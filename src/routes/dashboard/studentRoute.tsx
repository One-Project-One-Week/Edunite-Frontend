import LazyLoad from "@/components/LazyLoad";
import { LandingPageLazyLoadElement, StudentCourseRequestFormLazyLoadElement, StudentDashboardPageLazyLoadElement, StudentEnrolledCoursesDetailsPageLazyLoadElement, StudentEnrollFormLazyLoadElement, StudentListingDetailsPageLazyLoadElement, StudentListingPageLazyLoadElement, StudentProfilePageLazyLoadElement } from "@/constants/LazyLoadElement";


const studentListingRoute = [
    { 
        path: "/dashboard/student",
        element: <LazyLoad component={StudentDashboardPageLazyLoadElement} />
    },
   
    { 
        path: "/dashboard/student/profile",
        element: <LazyLoad component={StudentProfilePageLazyLoadElement} />
    },
   
    {
        path: `/dashboard/student/profile/enrolled-courses/{id}`,
        element: <LazyLoad component={StudentEnrolledCoursesDetailsPageLazyLoadElement} />
    },
    {
        path: "/dashboard/student/listing",
        element: <LazyLoad component={StudentListingPageLazyLoadElement} />
    },
    {
        path: "/dashboard/student/listing/:id",
        element: <LazyLoad component={StudentListingDetailsPageLazyLoadElement} />
    },
    {
        path: "/dashboard/student/enroll-form",
        element: <LazyLoad component={StudentEnrollFormLazyLoadElement} />
    },
    {
        path: "/dashboard/student/course-request-form",
        element: <LazyLoad component={StudentCourseRequestFormLazyLoadElement} />
    },

    {
        path : "/dashboard/learning-path",
        element: <LazyLoad component={LandingPageLazyLoadElement} />
    }
]

export default studentListingRoute;