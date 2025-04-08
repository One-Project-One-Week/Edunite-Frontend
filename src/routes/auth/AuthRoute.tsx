import LazyLoad from "@/components/LazyLoad";
import { LoginPage, SignUpPage } from "@/constants/LazyLoadElement";


const authRoute = [
    {
        path: "login",
        element: <LazyLoad component={LoginPage} />

    },
    {
        path: "sign-up",
        element: <LazyLoad component={SignUpPage} />
    }
];


export default authRoute;