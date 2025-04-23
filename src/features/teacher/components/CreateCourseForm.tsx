import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type CourseFormData = {
    title: string;
    description: string;
    course_category: string;
    start_date: string;
    end_date: string;
    schedule: string;
    student_quantity: number;
};

const CreateCourseForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm<CourseFormData>();

    const onSubmit: SubmitHandler<CourseFormData> = (data: CourseFormData) => {
        const payload = {
            id: "ccr001",
            teacher_id: "t001",
            teacher_name: "Alice Johnson",
            ...data,
            status: "pending",
            created_at: new Date().toISOString(),

        };
        // try {
        //     const response = await axios.post("/api/create-course-request", payload);
        //     console.log("✅ Course created:", response.data);
        //     reset();
        //     setIsOpen(false);
        //   } catch (error) {
        //     console.error("❌ Error creating course:", error);
        //   }
        console.log("🚀 Course Payload:", payload);
        reset();


    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded">
                Create Course
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg space-y-4"
                    >
                        <h2 className="text-xl font-bold mb-2">Create New Course</h2>

                        <input {...register("title")} placeholder="Course Title" className="border p-2 w-full" required />
                        <textarea {...register("description")} placeholder="Description" className="border p-2 w-full" required />
                        <input {...register("course_category")} placeholder="Category" className="border p-2 w-full" required />
                        <label className="block text-sm font-medium text-gray-700">
                            Start Date
                            <input
                                type="date"
                                {...register("start_date")}
                                className="border p-2 w-full mt-1"
                                required
                            />
                        </label>
                        <label className="block text-sm font-medium text-gray-700">
                            End Date
                            <input
                                type="date"
                                {...register("end_date")}
                                className="border p-2 w-full mt-1"
                                required
                            />
                        </label>
                        <input {...register("schedule")} placeholder="Schedule" className="border p-2 w-full" required />

                        <input
                            type="number"
                            {...register("student_quantity", { valueAsNumber: true })}
                            placeholder="Student Quantity"
                            className="border p-2 w-full"
                            required
                        />

                        <div className="flex justify-end gap-2">
                            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 border rounded">
                                Cancel
                            </button>
                            <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default CreateCourseForm;
