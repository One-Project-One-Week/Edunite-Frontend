import { lazy } from "react";

//Layouts
export const PublicLayout = lazy(() => import("../layouts/PublicLayout"));

//Auth pages
export const LoginPage = lazy(() => import("../auth/pages/LoginPage"));
export const SignUpPage = lazy(() => import("../auth/pages/SignUpPage"));