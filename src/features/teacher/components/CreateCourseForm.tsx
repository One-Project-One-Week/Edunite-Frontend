// components/CreateCourseForm.tsx
import { useState } from "react";

const CreateCourseForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({
        teacher_id: "t001",
        teacher_name: "Alice Johnson",
        title: "",
        description: "",
        course_category: "",
        start_date: "",
        end_date: "",
        schedule: "",
        target_students: "",
        student_quantity: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === "student_quantity" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            ...form,
            status: "pending",
            target_students: form.target_students.split(",").map((s) => s.trim()),
        };

        try {
            const res = await fetch("/api/create-course-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            console.log("Course Created:", data);
            setIsOpen(false);
        } catch (err) {
            console.error("Failed to create course:", err);
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="bg-purple-600 text-white px-4 py-2 rounded">
                Create Course
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-6 rounded shadow-md w-full max-w-lg space-y-4"
                    >
                        <h2 className="text-xl font-bold">Create New Course</h2>

                        <input type="text" name="title" placeholder="Course Title" className="w-full p-2 border" onChange={handleChange} required />
                        <textarea name="description" placeholder="Description" className="w-full p-2 border" onChange={handleChange} required />
                        <input type="text" name="course_category" placeholder="Category" className="w-full p-2 border" onChange={handleChange} required />
                        <input type="date" title="start date" name="start_date" className="w-full p-2 border" onChange={handleChange} required />
                        <input type="date" name="end_date" className="w-full p-2 border" onChange={handleChange} required />
                        <input type="text" name="schedule" placeholder="Schedule" className="w-full p-2 border" onChange={handleChange} required />
                        <input type="number" name="student_quantity" placeholder="Student Quantity" className="w-full p-2 border" onChange={handleChange} required />

                        <div className="flex justify-end gap-2">
                            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 border rounded">
                                Cancel
                            </button>
                            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
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
