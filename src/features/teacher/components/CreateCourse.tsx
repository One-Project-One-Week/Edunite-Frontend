import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CreateCourseForm from "./CreateCourseForm";
import { dummyCourses } from "@/assets/dummy-datas/course";
import useUserStore from "@/store/userStore";

export default function CreateCourses() {
  const { user } = useUserStore();

  const storedCourse = localStorage.getItem("createdCourse");
  const parsedCourse = storedCourse ? JSON.parse(storedCourse) : null;

  const localCourse = parsedCourse
    ? [
        {
          ...parsedCourse,
          user_id: user.id,
          name: user.name,
          student_quantity: [],
          status: "pending",
          created_at: new Date().toISOString(),
          id: String(dummyCourses.length + 1),
        },
      ]
    : [];

  const dummyCourse = dummyCourses.filter(
    (course) => course.user_id === user.id
  );

  const courses = [...dummyCourse, ...localCourse];

  return (
    <div className="bg-white text-purple-900 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Your Courses</h1>
        <CreateCourseForm />
      </div>

      {courses.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-300 hover:shadow-2xl hover:scale-105 transition-transform duration-300 transform rounded-lg"
            >
              <Link
                to={`/teacher/created-courses/${course.id}`}
                className="no-underline"
              >
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-purple-900 truncate">
                    {course.title}
                  </h2>
                  <p className="text-sm text-purple-700 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-purple-500">
                      Created on:{" "}
                      {new Date(course.created_at).toLocaleDateString()}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-md ${
                        course.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : course.status === "rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {course.status.charAt(0).toUpperCase() +
                        course.status.slice(1)}
                    </span>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors">
                    View Details
                  </button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center text-purple-700 mt-10">
          <p className="text-lg">
            No courses found. Start creating your first course!
          </p>
        </div>
      )}
    </div>
  );
}
