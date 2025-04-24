import { lazy } from "react";

//Layouts
export const PublicLayoutLazyLoadElement = lazy(() => import("../layouts/PublicLayout"));
export const AdminLayoutLazyLoadElement = lazy(() => import("../layouts/AdminLayout"));

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