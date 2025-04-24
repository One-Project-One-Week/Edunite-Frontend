import LazyLoad from "@/components/LazyLoad";
import {  LandingPageLazyLoadElement, LoginPageLazyLoadElement, OurCoursesDetailPageLazyLoadElement, OurCoursesPageLazyLoadElement, PublicLayoutLazyLoadElement } from "@/constants/LazyLoadElement";

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
                element : <LazyLoad component={LoginPageLazyLoadElement}/>
            },
            {
                path    : '/our-courses',
                element : <LazyLoad component={OurCoursesPageLazyLoadElement}/>
            },
            {
                path    : `/our-courses/:id`,
                element : <LazyLoad component={OurCoursesDetailPageLazyLoadElement}/>
            }

            
          
        ]
    }
]


export default publicRoute;