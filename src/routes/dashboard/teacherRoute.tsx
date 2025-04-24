import LazyLoad from "@/components/LazyLoad";
import {  TeacherCourseDetailPageLazyLoadElement, TeacherDashboardPageLazyLoadElement, TeacherProfilePageLazyLoadElement } from "@/constants/LazyLoadElement";




const teacherListingRoute = [
    { 
        path: "/dashboard/teacher/profile",
        element: <LazyLoad component={TeacherProfilePageLazyLoadElement} />
    },
   
    {
        path: "/dashboard/teacher/created-courses/:courseId",
        element: <LazyLoad component={TeacherCourseDetailPageLazyLoadElement} />
    },
    
    {
        path: "/dashboard/teacher",
        element: <LazyLoad component={TeacherDashboardPageLazyLoadElement} />
    },
    // {
    //     path: "/dashboard/student/enroll-form",
    //     element: <LazyLoad component={StudentEnrollFormLazyLoadElement} />
    // },
    // {
    //     path: "/dashboard/student/course-request-form",
    //     element: <LazyLoad component={StudentCourseRequestFormLazyLoadElement} />
    // },
]

export default teacherListingRoute;