import { useNavigate, useParams } from "react-router-dom";
import { Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getCourseByIdQueryOptions } from "@/queries/courseQueryOptions";
import Loading from "@/components/Loading";

export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    if (!id) return navigate("/admin/courses");
    const { data: course, isLoading } = useQuery(getCourseByIdQueryOptions(id));

    console.log(course);

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="w-full max-w-7xl bg-white border border-gray-200 rounded-3xl shadow-2xl p-10">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 mb-10 flex items-center gap-4">
                        {course?.title}
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
                            <span className="text-sm text-purple-600 font-medium">Created by</span>
                            <p className="text-lg font-semibold text-purple-900">{course?.username}</p>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
                            <span className="text-sm text-purple-600 font-medium">Course Category</span>
                            <p className="text-lg font-semibold text-purple-900">{course?.course_category}</p>
                        </div>

                        <div className="bg-purple-100 rounded-xl p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-2 text-purple-700">
                                <Clock />
                                <span className="text-sm font-semibold">Duration</span>
                            </div>
                            <p className="text-gray-800">
                                {course?.start_date} - {course?.end_date}
                            </p>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
                            <span className="text-sm text-purple-600 font-medium">Schedule</span>
                            <p className="text-lg font-semibold text-purple-900">{course?.schedule}</p>
                        </div>

                        <div className="lg:col-span-2 bg-purple-50 rounded-xl p-8 shadow-md border-l-4 border-purple-400">
                            <span className="block text-lg text-purple-800 font-semibold mb-3">Description</span>
                            <p className="text-gray-700 leading-relaxed">{course?.description}</p>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
                            <span className="text-sm text-purple-600 font-medium">Created At</span>
                            <p className="text-md font-medium text-gray-700">
                                {course?.created_at
                                    ? new Date(course.created_at).toLocaleString("en-US", {
                                          dateStyle: "medium",
                                          timeStyle: "short",
                                      })
                                    : "N/A"}
                            </p>
                        </div>
                    </div>

                    <div className="bg-purple-100 rounded-xl p-8 mt-10 shadow-md">
                        <span className="block text-sm text-purple-600 font-semibold mb-3">Total Students</span>

                        <div className="text-5xl font-extrabold text-purple-800 mb-6">
                            {course?.student_quantity.length}
                        </div>

                        <div className="flex flex-col gap-4 max-h-80 overflow-y-auto pr-2">
                            {course?.student_quantity.map((student: any) => (
                                <div
                                    key={student.id}
                                    className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm hover:bg-purple-50 transition"
                                >
                                    <img
                                        src={student.avatar}
                                        alt={student.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-300"
                                    />
                                    <span className="text-md font-medium text-gray-800">{student.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
