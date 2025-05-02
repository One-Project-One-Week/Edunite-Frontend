
export type BaseCourse = {
    title: string;
    description: string;
    course_category: string;
    start_date: string;
    end_date: string;
    schedule: string;
}

export type CreateCourse = {
    user_id: string;
    course: BaseCourse;
}

export type StudentObj = {
    id: string;
    name: string;
    avatar: string;
}

export type Course = {
    id: string;
    username: string | null;
    user_id: string | null;
    created_at: string;
    student_quantity: StudentObj[];
    title: string;
    description: string;
    course_category: string;
    start_date: string;
    status: string;
    end_date: string;
    schedule: string;
}