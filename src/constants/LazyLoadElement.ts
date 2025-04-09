import { lazy } from "react";

//Layouts
export const PublicLayoutLazyLoadElement = lazy(() => import("../layouts/PublicLayout"));

//Auth pages
export const LoginPageLazyLoadElement = lazy(() => import("../auth/pages/LoginPage"));
export const SignUpPageLazyLoadElement = lazy(() => import("../auth/pages/SignUpPage"));