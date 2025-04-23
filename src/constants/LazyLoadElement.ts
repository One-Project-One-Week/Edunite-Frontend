import { lazy } from "react";

//Layouts
export const PublicLayoutLazyLoadElement = lazy(() => import("../layouts/PublicLayout"));
export const AdminLayoutLazyLoadElement = lazy(() => import("../layouts/AdminLayout"));

//Auth pages
export const LoginPageLazyLoadElement = lazy(() => import("../features/auth/pages/LoginPage"));
export const SignUpPageLazyLoadElement = lazy(() => import("../features/auth/pages/SignUpPage"));

//Admin pages
export const AllUserPageLazyLoadElement = lazy(() => import("../features/admin/pages/AllUserPage"));
export const AllPostPageLazyLoadElement = lazy(() => import("../features/admin/pages/AllPostPage"));
export const PendingPostPageLazyLoadElement = lazy(() => import("../features/admin/pages/PendingPostPage"));