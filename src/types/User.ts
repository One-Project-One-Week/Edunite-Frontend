import { Course } from "./Course";

export type BaseUser = {
        id: string,
        name: string,
        email: string,
        phone_number: number,
        role: "Admin" | "Stundent" | "Teacher"
}

export type StudentPost = {
        name: string,
        email: string
        phone_number: number,
        role: "Admin" | "Stundent" | "Teacher",
        grade: string,
}

export type TeacherPost = {
        name: string,
        email: string
        phone_number: number,
        role: "Admin" | "Stundent" | "Teacher",
        subjects_type: "profession" | "basic"
        subjects: ProfessionSubject[] | BasicSubject[],
}

export type ProfessionSubject = {
        name: string,
}

export type BasicSubject = {
        name: string,
        grade: string,
}


export type Teacher = BaseUser & {
        created_courses: Course[] | null,
        subjects_type: "profession" | "basic"
        subjects: ProfessionSubject[] | BasicSubject[],
}

export type Stundent = BaseUser & {
        enrolled_courses: Course[] | null,
        grade: string,
}