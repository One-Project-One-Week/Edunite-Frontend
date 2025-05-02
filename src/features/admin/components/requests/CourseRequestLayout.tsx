

import { ScrollArea } from "@/components/ui/scroll-area";
import CourseRequestList from "./CourseRequestList";
import CourseRequestHeader from "./CourseRequestHeader";
import { useQuery } from "@tanstack/react-query";
import { getAllCoursesQueryOptions } from "@/queries/courseQueryOptions";
import { Course } from "@/types/Course";
import Loading from "@/components/Loading";

export default function CourseRequestLayout() {


  const { data: courses, isLoading} = useQuery(getAllCoursesQueryOptions());



  return (
    <section>
      <CourseRequestHeader />
      {isLoading ? (<Loading />) : (
        <ScrollArea className="h-[40rem] my-2 py-4">
        <div className="px-5 mt-2 grid grid-cols-3 gap-4">
          {courses?.map((request: Course) => {
            return <CourseRequestList request={request} />;
          })}
        </div>
      </ScrollArea>
      )}
    </section>
  );
}
