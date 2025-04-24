import { lazy } from "react";

// landing page
export const LandingPageLazyLoadElement = lazy(() => import("../pages/LandingPage"));

//Layouts
export const PublicLayoutLazyLoadElement = lazy(() => import("../layouts/PublicLayout"));
export const AdminLayoutLazyLoadElement = lazy(() => import("../layouts/AdminLayout"));
export const DashboardLayoutLazyLoadElement = lazy(() => import("../layouts/DashboardLayout"));

//Auth pages
export const LoginPageLazyLoadElement = lazy(() => import("../features/auth/pages/LoginPage"));
export const SignUpPageLazyLoadElement = lazy(() => import("../features/auth/pages/SignUpPage"));

//Admin pages
export const AllUserPageLazyLoadElement = lazy(() => import("../features/admin/pages/AllUserPage"));

export const ListingStudentRequestPageLazyLoadElement = lazy(() => import("../features/admin/pages/ListingStudentRequestsPage"));
export const StudentRequestDetailPageLazyLoadElement = lazy(() => import('../features/admin/pages/StudentRequestDetailPage'));
export const ListingCreateCourseRequestsPageLazyLoadElement = lazy(() => import('../features/admin/pages/ListingCreateCourseRequestsPage'));
export const CourseRequestDetailPageLazyLoadElement = lazy(() => import("../features/admin/pages/CourseRequestDetailPage"));
export const ListingTeacherRequestsPageLazyLoadElement= lazy(() => import("../features/admin/pages/ListingTeacherRequestsPage"));
export const ListingAllCoursePageLazyLoadElement = lazy(() => import("../features/admin/pages/ListingAllCoursePage"));
export const CourseDatailPageLazyLoadElement = lazy(() => import("../features/admin/pages/CourseDetailPage"));


//Student pages
export const StudentProfilePageLazyLoadElement = lazy(() => import("../features/student/pages/StudentProfilePage"));
export const StudentEnrolledCoursesPageLazyLoadElement = lazy(() => import("../features/student/pages/StudentEnrolledCourses"));
export const StudentEnrolledCoursesDetailsPageLazyLoadElement = lazy(() => import("../features/student/pages/StudentEnrolledCoursesDetails"));
export const StudentListingPageLazyLoadElement = lazy(() => import("../features/student/pages/StudentListingPage"));
export const StudentListingDetailsPageLazyLoadElement = lazy(() => import("../features/student/pages/StudentListingPageDetails"));
export const StudentEnrollFormLazyLoadElement = lazy(() => import("../features/student/pages/StudentEnrollForm"));
export const StudentCourseRequestFormLazyLoadElement = lazy(() => import("../features/student/pages/StudentCourseRequestForm"));

// Teacher pages
export const TeacherProfilePageLazyLoadElement = lazy(() => import("../features/teacher/pages/TeacherProfilePage"));
export const TeacherCreateCoursePageLazyLoadElement = lazy(() => import("../features/teacher/pages/TeacherCreateCoursePage"));
export const TeacherCourseDetailPageLazyLoadElement = lazy(() => import("../features/teacher/pages/CourseDetailPage"));

