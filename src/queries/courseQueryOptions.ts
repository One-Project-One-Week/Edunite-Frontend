import { MutationOptions, queryOptions } from '@tanstack/react-query';
import { getAllCourses, getCourseById, updateStatus } from '@/services/courseServices';
import { useQueryClient } from '@tanstack/react-query';
import { Course } from '@/types/Course';


export function getAllCoursesQueryOptions() {
    return queryOptions({
        queryKey: ['courses'],
        queryFn: getAllCourses
    })
}


export const updateCourseStatusQueryOptions = (): MutationOptions<
    any,
    Error,
    { course_id: string; status: string},
    { previousData?: Course[] }
> => {
    const queryClient = useQueryClient();
    return {
        mutationFn: ({ course_id, status }: { course_id: string; status: string}) =>
            updateStatus(course_id, status),
        onSuccess: ({ course_id }) => {
            queryClient.invalidateQueries({ queryKey: ["courses", course_id] });
            window.location.reload();
        },
        onError: (error, { course_id }, context) => {
            console.error("Error creating course:", error);
            if (context?.previousData) {
                queryClient.setQueryData(["courses", course_id], context.previousData);
            }
        },
    };
};


export function getCourseByIdQueryOptions(courseId: string) {
    return queryOptions({
        queryKey: ['course', courseId],
        queryFn: () => getCourseById(courseId)
    })
}