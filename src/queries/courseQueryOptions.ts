import { MutationOptions, queryOptions } from '@tanstack/react-query';
import { getAllCourses, getCourseById, updateStatus } from '@/services/courseServices';
import { useQueryClient } from '@tanstack/react-query';
import { Course } from '@/types/Course';


export function getAllCoursesQueryOptions(filter?:string) {
    return queryOptions({
        queryKey: ['courses'],
        queryFn: () => getAllCourses(filter ?? undefined)
    })
}


export const updateCourseStatusQueryOptions = (): MutationOptions<
  any,
  Error,
  { course_id: string; status: string },
  { previousData?: Course }
> => {
  const queryClient = useQueryClient();

  return {
    mutationFn: ({ course_id, status }) => updateStatus(course_id, status),

    onMutate: async ({ course_id, status }) => {
      await queryClient.cancelQueries({ queryKey: ["courses", course_id] });

      const previousData = queryClient.getQueryData<Course>(["courses", course_id]);

      queryClient.setQueryData<Course>(["courses", course_id], (old) => ({
        ...old!,
        status,
      }));

      return { previousData };
    },

    onError: (error, { course_id }, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["courses", course_id], context.previousData);
      }
      console.error("Error updating course status:", error);
    },

    onSuccess: (_, { course_id }) => {
      queryClient.invalidateQueries({ queryKey: ["courses", course_id] });
      queryClient.invalidateQueries({ queryKey: ["courses"] });  
    },
  };
};



export function getCourseByIdQueryOptions(courseId: string) {
    return queryOptions({
        queryKey: ['courses', courseId],
        queryFn: () => getCourseById(courseId)
    })
}