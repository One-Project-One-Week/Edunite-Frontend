import { useNavigate, useParams } from "react-router-dom";
import { dummyStudentRequests } from "../../data/studentRequestData";
import { Clock, ArrowBigRight } from "lucide-react";

export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const request = dummyStudentRequests.find((request) => request?.id === id);
    if (!request) {
        navigate("/admin");
    }

    return (
        <section className="px-5 my-6">
            <div className="max-w-5xl border-l-4 border-purple-heart-600 pl-6 bg-white p-6">
                <h1 className="text-3xl font-bold text-purple-heart-700 mb-6 flex items-center gap-4">
                    {request?.title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-800">
                    <div>
                        <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
                            Requested by
                        </span>
                        <span className="text-gray-600">{request?.username}</span>
                    </div>

                    <div>
                        <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
                            Course Category
                        </span>
                        <span className="text-gray-600">{request?.course_category}</span>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <Clock className="text-purple-heart-700" />
                            <span className="text-md text-purple-heart-700 font-semibold">
                                Duration
                            </span>
                        </div>
                        <div className="flex">
                            <div>{request?.start_date}</div>
                            <div>{request?.end_date}</div>
                        </div>
                    </div>

                    <div>
                        <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
                            Schedule
                        </span>
                        <span className="text-gray-600">{request?.schedule}</span>
                    </div>

                    <div>
                        <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
                            Total Students
                        </span>
                        <span className="text-gray-600">{request?.student_quantity.length}</span>
                    </div>

                    <div className="md:col-span-2">
                        <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
                            Description
                        </span>
                        <p className="mt-2 text-gray-700 bg-purple-heart-50 border-l-4 border-purple-heart-300 p-4 rounded-md shadow-sm">
                            {request?.description}
                        </p>
                    </div>

                    <div>
                        <span className="block text-md mb-2 text-purple-heart-700 font-semibold">
                            Created At
                        </span>
                        <span className="text-gray-600">
                            {request?.created_at
                                ? new Date(request.created_at).toLocaleString("en-US", {
                                        dateStyle: "medium",
                                        timeStyle: "short",
                                    })
                                : "N/A"}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
