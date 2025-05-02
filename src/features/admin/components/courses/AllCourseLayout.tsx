import AllCourseList from "./AllCourseList"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import AllCourseHeader from "./AllCourseHeader"
import { useQuery } from "@tanstack/react-query"
import { getAllCoursesQueryOptions } from "@/queries/courseQueryOptions"
import { Course } from "@/types/Course"
import Loading from "@/components/Loading"

export default function AllCourseLayout() {

    const {data:approvedCourses, isLoading} = useQuery(getAllCoursesQueryOptions("approved"));



  return (
    <section>
        <AllCourseHeader />
      <ScrollArea className="h-[37rem] my-2 py-4">
        {isLoading? <Loading /> : (<div className="px-5 mt-2 grid grid-cols-3 gap-4">
          {approvedCourses.map((request:Course) => {
            return <AllCourseList request={request} />;
          })}
        </div>)}
        
      </ScrollArea>
    </section>
  )
}
