import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCourseByIdQueryOptions } from "@/queries/courseQueryOptions";
import { StudentObj } from "@/types/Course";

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();

  if(!courseId) return;

  const {data: course, isLoading}  = useQuery(getCourseByIdQueryOptions(courseId));


  return (
    <>
    {isLoading? <Loading /> : (<div className="w-full max-w-6xl mx-auto px-6 py-10 font-sans">
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-purple-900 tracking-tight mb-4 flex items-center space-x-4">
          <span>{course.title}</span>
          <span
            className={`px-3 py-1 text-sm font-medium rounded-full ${
              course.status === "approved"
          ? "bg-green-100 text-green-800"
          : course.status === "pending"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-red-100 text-red-800"
            }`}
          >
            {course.status}
          </span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          {course.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-xl">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Category</p>
          <p className="text-xl font-semibold text-purple-800">
            {course.course_category}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Created By</p>
          <p className="text-xl font-semibold text-purple-800">
            {course.username}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Start Date</p>
          <p className="text-xl font-semibold text-gray-800">
            {course.start_date}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">End Date</p>
          <p className="text-xl font-semibold text-gray-800">
            {course.end_date}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Schedule</p>
          <p className="text-xl font-semibold text-gray-800">
            {course.schedule}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">Created At</p>
          <p className="text-xl font-semibold text-gray-800">
            {new Date(course.created_at).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">
          Enrolled Students
        </h2>
        {course.student_quantity.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {course.student_quantity.map((student:StudentObj) => (
          <div
          key={student.id}
          className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-14 h-14 rounded-full object-cover shadow-sm"
            />
            <div className="text-lg font-medium text-gray-800">{student.name}</div>
          </div>
        
          <Link
            to="/"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-sm hover:shadow-md text-sm"
          >
            View Profile
          </Link>
        </div>
        
        
        ))}
          </div>
        ) : (
          <p className="text-gray-600">
        No students are enrolled in this course yet.
          </p>
        )}
      </div>
    </div>)}
    </>
  );
}
