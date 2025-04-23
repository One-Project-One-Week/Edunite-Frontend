import LazyLoad from "@/components/LazyLoad";
import {  TeacherCourseDetailPageLazyLoadElement, TeacherProfilePageLazyLoadElement } from "@/constants/LazyLoadElement";



const teacherListingRoute = [
    { 
        path: "/dashboard/teacher/profile",
        element: <LazyLoad component={TeacherProfilePageLazyLoadElement} />
    },
   
    {
        path: "/dashboard/teacher/created-courses/:courseId",
        element: <LazyLoad component={TeacherCourseDetailPageLazyLoadElement} />
    },
    
    // {
    //     path: "/dashboard/student/listing/:id",
    //     element: <LazyLoad component={StudentListingDetailsPageLazyLoadElement} />
    // },
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