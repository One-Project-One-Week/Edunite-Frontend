import API from "@/api/apiConfig";

export const getAllCourses = async () => {
    try {
        const response = await API.get("/courses");
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching all courses: ${error}`);
    }
};

export const getCourseById = async (courseId: string) => {
    try {
        const response = await API.get(`/courses/${courseId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching course by ID: ${error}`);
    }
};

