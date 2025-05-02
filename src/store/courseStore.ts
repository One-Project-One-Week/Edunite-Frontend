import {create} from 'zustand';
import { Course } from '@/types/Course';


type CourseStore = {
    courses: Course[] | null,
    addNewCourse: (course: Course) => void,
    updateCourse: (course: Course) => void,
    getOneCourse: (id: string) => Course | undefined,
    getAllCoursesByUserId: (userId: string) => Course[] | undefined,
}


const useCourseStore = create<CourseStore>(() => ({
    courses: JSON.parse(localStorage.getItem("Course") || '{}'),
    addNewCourse: (course: Course) => {
        localStorage.setItem("Course", JSON.stringify([...JSON.parse(localStorage.getItem("Course") || '[]'), course]));
    },
    updateCourse: (course: Course) => {
        const courses = JSON.parse(localStorage.getItem("Course") || '[]').map((c: Course) => c.id === course.id ? course : c);
        localStorage.setItem("Course", JSON.stringify(courses));
    },
    getOneCourse: (id: string) => {
        const courses = JSON.parse(localStorage.getItem("Course") || '[]');
        return courses.find((course: Course) => course.id === id);
    },
    getAllCoursesByUserId: (userId: string) => {
        const courses = JSON.parse(localStorage.getItem("Course") || '[]');
        return courses.filter((course: Course) => course.user_id === userId);
    }
}));


export default useCourseStore;