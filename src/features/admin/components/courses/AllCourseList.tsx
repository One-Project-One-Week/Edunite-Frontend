import { Book } from "lucide-react";
import { Link } from "react-router-dom";
import { Course } from "@/types/Course";

type AllcourseListProps = {
  request: Course;
};

export default function AllCourseList({ request }: AllcourseListProps) {
  return (
    <div className="bg-white flex flex-col justify-between rounded-xl shadow-sm border border-gray-200 p-6 w-full max-w-md hover:shadow-lg transition-transform transform hover:scale-105 h-full">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
          <Book className="w-6 h-6" />
          {request.title}
        </h2>
      </div>

      <div className="text-sm text-gray-600 space-y-3 py-3 flex-grow">
        <p>
          <span className="font-medium text-gray-800">Host by:</span>{" "}
          {request.username}
        </p>
        <p>
          <span className="font-medium text-gray-800">Category:</span>{" "}
          <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs font-medium">
            {request.course_category}
          </span>
        </p>
        <p>
          <span className="font-medium text-gray-800">Start Date:</span>{" "}
          {new Date(request.start_date).toLocaleDateString()}
        </p>
        <p>
          <span className="font-medium text-gray-800">Students:</span>{" "}
          {request.student_quantity.length}
        </p>
      </div>

      <div className="mt-auto">
        <Link
          to={`/admin/courses/${request.id}/${request.title}`}
          className="inline-block text-center w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-3 rounded-md transition-shadow shadow-md hover:shadow-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
