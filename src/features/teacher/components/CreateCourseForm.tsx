import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createCourseByUserIdOptions } from "@/queries/userQueryOptions";
import useUserStore from "@/store/userStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Zod schema
const courseSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  course_category: z.string().min(1),
  start_date: z.string().min(1),
  end_date: z.string().min(1),
  schedule: z.string().min(1),
});

type CourseFormValues = z.infer<typeof courseSchema>;

const CreateCourseForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"Profession" | "Basic">("Profession");
  const { user } = useUserStore();
  const createCourse = useMutation(createCourseByUserIdOptions());

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm<CourseFormValues>({
    resolver: zodResolver(courseSchema),
  });

  const onSubmit = (data: CourseFormValues) => {
    createCourse.mutate({ user_id: user.id, course: data });
    reset();
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg flex gap-2 hover:scale-105 transition"
      >
        <Plus />
        <span>Create Course</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center p-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg space-y-6 relative"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-purple-800 hover:text-gray-700"
            >
              <X />
            </button>

            <h2 className="text-2xl font-extrabold text-purple-800 text-center">
              Create New Course
            </h2>

            <input
              {...register("title")}
              placeholder="Course Title"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              {...register("description")}
              placeholder="Description"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-500"
              rows={4}
              required
            />

            {/* Mode Selector */}
            <Select onValueChange={(val) => setMode(val as "Profession" | "Basic")} defaultValue="Profession">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Profession">Profession</SelectItem>
                <SelectItem value="Basic">Basic</SelectItem>
              </SelectContent>
            </Select>

            {/* Dynamic Category Field */}
            {mode === "Profession" && (
              <Select onValueChange={(val) => setValue("course_category", val)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Art">Art</SelectItem>
                  <SelectItem value="Creator">Creator</SelectItem>
                  <SelectItem value="Crypto">Crypto</SelectItem>
                </SelectContent>
              </Select>
            )}

            {mode === "Basic" && (
              <>
                <Select
                  onValueChange={(grade) => {
                    const current = watch("course_category")?.split(": ")[1] || "";
                    setValue("course_category", `${grade}: ${current}`);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={i} value={`Grade ${i + 1}`}>
                        Grade {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  onValueChange={(subject) => {
                    const current = watch("course_category")?.split(": ")[0] || "Grade 1";
                    setValue("course_category", `${current}: ${subject}`);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Math">Math</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Myanmar">Myanmar</SelectItem>
                  </SelectContent>
                </Select>
              </>
            )}

            <input
              type="date"
              {...register("start_date")}
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
            <input
              type="date"
              {...register("end_date")}
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
            <input
              {...register("schedule")}
              placeholder="Schedule"
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
              >
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
