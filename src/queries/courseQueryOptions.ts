import { getAllCourses } from "@/services/courseServices";
import { queryOptions } from "@tanstack/react-query";


export function getAllCoursesQueryOptions() {
    
    return queryOptions({
        queryKey: ["courses"],
        queryFn: getAllCourses,
    })
}