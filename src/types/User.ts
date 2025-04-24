import { Course } from "./Course";

export type User = {
        id: number,
        name: string,
        email: string,
        phone_number: number,
        role: "Admin" | "User" | "Seller",
};

export type BaseUser = {
        id: number,
        name: string,
        email: string,
        phone_number: number,
        role: "Admin" | "Stundent" | "Teacher"
}

export type ProfessionSubject = {
        name: string,
}

export type BasicSubject = {
        name: string,
        grade: string,
}


export type Teacher = BaseUser & {
        created_courses: Course[],
        subjects_type: "profession" | "basic"
        subjects: ProfessionSubject[] | BasicSubject[],
}

export type Stundent = BaseUser & {
        enrolled_courses: Course[],
        grade: string,
}