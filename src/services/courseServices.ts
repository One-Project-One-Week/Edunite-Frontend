import API from "@/api/apiConfig";
import useCourseStore from "@/store/courseStore";

const { getOneCourse, courses, updateCourse } = useCourseStore.getState();

export const getAllCourses = async (filter?:string) => {
    try {
        const response = await API.get("/courses");
        return response.data;
    } catch (error) {

        if(filter === "all") return courses;

        return courses?.filter((cor) => cor.status === filter);
    }
};

export const updateStatus = async (courseId: string, status: string) => {
    
        try {
            const response = await API.put(`/courses/${courseId}`, { status });
            return response.data;
        } catch (error) {
            const course = getOneCourse(courseId);
            if (!course?.id) {
                throw new Error("Course ID is missing");
            }
            const data = { ...course, status, id: course.id };
            updateCourse(data);
            return data;
        }
}

export const getCourseById = async (courseId: string) => {
    try {
        const response = await API.get(`/courses/${courseId}`);
        return response.data;
        
    } catch (error) {
        const data = getOneCourse(courseId);
        return data;
    }
};

