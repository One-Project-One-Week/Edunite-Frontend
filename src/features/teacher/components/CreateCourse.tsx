import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CreateCourseForm from "./CreateCourseForm";



const courses = [
    {
        courseId: "course1",
        title: "Introduction to Programming",
        description: "Learn the basics of programming using Python.",
    },
    {
        courseId: "course2",
        title: "Web Development Bootcamp",
        description: "Become a full-stack web developer in 12 weeks.",
    },
    {
        courseId: "course3",
        title: "Data Science with R",
        description: "Analyze data and build predictive models using R.",
    },
]

export default function CreateCourses() {

    return (
        <div className="min-h-screen bg-white text-purple-900 p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Your Courses</h1>
                <CreateCourseForm/>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <Card key={course.courseId} className="bg-purple-50 border-purple-200">
                        <Link to={`/dashboard/teacher/created-courses/${course.courseId}`}>
                            <CardContent className="p-4 space-y-2">
                                <h2 className="text-xl font-semibold">{course.title}</h2>
                                <p className="text-sm text-purple-700">{course.description}</p>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
