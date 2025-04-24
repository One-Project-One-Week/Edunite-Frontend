import LazyLoad from "@/components/LazyLoad";
import { LandingPageLazyLoadElement, LoginPageLazyLoadElement, PublicLayoutLazyLoadElement } from "@/constants/LazyLoadElement";

const publicRoute = [
    {
        path: '/',
        element: <LazyLoad component={PublicLayoutLazyLoadElement}/>,
        children: [
            {
                index : true,
                element: <LazyLoad component={LandingPageLazyLoadElement}/>
            },
            {
                path    : '/login',
                elemet : <LazyLoad component={LoginPageLazyLoadElement}/>
            }
            
          
        ]
    }
]


export default publicRoute;