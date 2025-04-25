import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CreateCourseForm from "./CreateCourseForm";
import { dummyCourses } from "@/assets/dummy-datas/course";
import useUserStore from "@/store/userStore";

export default function CreateCourses() {

    const {user} = useUserStore();
    const courses = dummyCourses.filter((course) => course.user_id === user.id);

    return (
        <div className=" bg-white text-purple-900 p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Your Courses</h1>
                <CreateCourseForm/>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <Card 
                        key={course.id} 
                        className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-300 hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                    >
                        <Link 
                            to={`/teacher/created-courses/${course.id}`} 
                            className="no-underline"
                        >
                            <CardContent className="p-6 space-y-4">
                                <h2 className="text-2xl font-bold text-purple-900">{course.title}</h2>
                                <p className="text-sm text-purple-700">{course.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-purple-500">Created on: {new Date(course.created_at).toLocaleDateString()}</span>
                                    <button 
                                        className="px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
