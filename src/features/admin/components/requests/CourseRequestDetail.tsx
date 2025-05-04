import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCourseByIdQueryOptions, updateCourseStatusQueryOptions } from "@/queries/courseQueryOptions";
import Loading from "@/components/Loading";

export default function CourseRequestDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: request, isLoading } = useQuery(getCourseByIdQueryOptions(id!));
  const status = useMutation(updateCourseStatusQueryOptions());

  if (isLoading) {
    return <Loading />;
  }

  const handleApprove = () => {
    status.mutate({ course_id: request?.id!, status: "approved" });
  };

  const handleReject = () => {
    status.mutate({ course_id: request?.id!, status: "rejected"});
  }

  if (!request) {
    navigate("/admin");
  }

  return (
    <section className="px-6 py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-4xl font-semibold text-gray-800 flex items-center gap-4">
            <Book className="w-9 h-9 text-purple-600" />
            {request?.title}
            <span
              className={`ml-auto px-4 py-1 text-sm rounded-full font-medium 
                ${
                  request?.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : request?.status === "approved"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
            >
              {request?.status.toUpperCase()}
            </span>
          </h1>
          <p className="text-sm text-gray-500 mt-3">
            Submitted by <span className="font-medium text-gray-700">{request?.username}</span> on{" "}
            <span className="font-medium text-gray-700">
              {request?.created_at
                ? new Date(request.created_at).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })
                : "N/A"}
            </span>
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Course Category</h3>
            <p className="text-gray-600">{request?.course_category}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Planned Schedule</h3>
            <p className="text-gray-600">{request?.schedule}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Start & End Dates</h3>
            <p className="text-gray-600">
              {request?.start_date} → {request?.end_date}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Target Student Count</h3>
            <p className="text-gray-600">{request?.student_quantity?.length}</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Course Description</h3>
            <div className="mt-2 bg-gray-100 border-l-4 border-purple-500 p-4 rounded-md text-gray-700">
              {request?.description}
            </div>
          </div>
        </div>

        {request?.status === "pending" && (
          <div className="flex gap-4 pt-10">
            <Button
              onClick={handleApprove}
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              Approve
            </Button>
            <Button onClick={handleReject} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md transition">
              Reject
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
