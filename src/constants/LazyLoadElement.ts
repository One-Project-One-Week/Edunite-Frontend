import { lazy } from "react";

//Layouts
export const PublicLayoutLazyLoadElement = lazy(() => import("../layouts/PublicLayout"));
export const AdminLayoutLazyLoadElement = lazy(() => import("../layouts/AdminLayout"));

//Auth pages
export const LoginPageLazyLoadElement = lazy(() => import("../auth/pages/LoginPage"));
export const SignUpPageLazyLoadElement = lazy(() => import("../auth/pages/SignUpPage"));

//Admin pages
export const AllUserPageLazyLoadElement = lazy(() => import("../admin/pages/AllUserPage"));
export const AllPostPageLazyLoadElement = lazy(() => import("../admin/pages/AllPostPage"));