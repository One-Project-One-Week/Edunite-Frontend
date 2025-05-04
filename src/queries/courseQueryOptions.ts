import { MutationOptions, queryOptions } from '@tanstack/react-query';
import { getAllCourses, getCourseById, updateStatus } from '@/services/courseServices';
import { useQueryClient } from '@tanstack/react-query';
import { Course } from '@/types/Course';


export function getAllCoursesQueryOptions(filter: string = "all") {
  return queryOptions({
    queryKey: ["courses", filter],
    queryFn: () => getAllCourses(filter),
  });
}


export const updateCourseStatusQueryOptions = (): MutationOptions<
  any,
  Error,
  { course_id: string; status: string },
  { previousData?: Course[], previousSingleData?: Course }
> => {
  const queryClient = useQueryClient();

  return {
    mutationFn: ({ course_id, status }) => updateStatus(course_id, status),

    onMutate: async ({ course_id, status }) => {
      // Cancel all "courses" queries regardless of filter
      await queryClient.cancelQueries({ queryKey: ["courses"] });

      // Optimistically update the course in the "all" list (if it exists there)
      const previousData = queryClient.getQueryData<Course[]>(["courses", "all"]);
      const previousSingleData = queryClient.getQueryData<Course>(["courses", course_id]);

      if (previousData) {
        queryClient.setQueryData<Course[]>(["courses", "all"], (oldCourses) =>
          oldCourses?.map((course) =>
            course.id === course_id ? { ...course, status } : course
          )
        );
      }

      if (previousSingleData) {
        queryClient.setQueryData<Course>(["courses", course_id], (old) => ({
          ...old!,
          status,
        }));
      }

      return { previousData, previousSingleData };
    },

    onError: (error, { course_id }, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["courses", "all"], context.previousData);
        queryClient.setQueryData(["courses", course_id], context.previousSingleData)
      }
      console.error("Error updating course status:", error);
    },

    onSuccess: (_,{course_id}) => {
      queryClient.invalidateQueries({ queryKey: ["courses", "all"]});
      queryClient.invalidateQueries({queryKey: ["courses", course_id]})

    },
  };
};




export function getCourseByIdQueryOptions(courseId: string) {
    return queryOptions({
        queryKey: ['courses', courseId],
        queryFn: () => getCourseById(courseId)
    })
}