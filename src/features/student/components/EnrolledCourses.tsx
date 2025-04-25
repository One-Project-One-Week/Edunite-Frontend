import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, ArrowRight } from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "John Doe",
    date: "March 1, 2025",
  },
  {
    id: "2",
    title: "Fundamentals of UX/UI Design",
    instructor: "Jane Smith",
    date: "February 20, 2025",
  },
  {
    id: "3",
    title: "JavaScript for Beginners",
    instructor: "David Chen",
    date: "January 15, 2025",
  },
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "John Doe",
    date: "March 1, 2025",
  },
  {
    id: "2",
    title: "Fundamentals of UX/UI Design",
    instructor: "Jane Smith",
    date: "February 20, 2025",
  },
  {
    id: "3",
    title: "JavaScript for Beginners",
    instructor: "David Chen",
    date: "January 15, 2025",
  },
]; 

const EnrolledCourses = () => {
  return (
    <div className=" bg-white px-2">
      {/* Header */}
      <header className="mb-4 text-center">
        <h1 className="text-3xl font-bold text-purple-700">Your Enrolled Courses</h1>
        <p className="text-gray-500 mt-2">Continue learning at your own pace 📘</p>
      </header>

      {/* Courses Grid */}
      <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-3">
        {courses.map((course) => (
         <Card key={course.id}  className="bg-gradient-to-br from-white via-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition h-full"
>
         <CardContent className="p-6 flex flex-col gap-4 h-full">
           <div className="flex items-center gap-3">
             <Book className="text-purple-600 w-6 h-6" />
             <h2 className="text-xl font-semibold text-purple-800">{course.title}</h2>
           </div>
       
           {/* Spacer to push bottom content to the end */}
           <div className="flex-grow" />
       
           {/* Bottom content */}
           <div className="flex flex-col gap-1">
             <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
             <p className="text-sm text-gray-400">Enrolled: {course.date}</p>
             <div className="flex justify-end mt-2">
               <Button
                 variant="outline"
                 className="text-purple-700 border-purple-600 hover:bg-purple-100 flex items-center gap-1"
               >
                 View Course <ArrowRight className="w-4 h-4" />
               </Button>
             </div>
           </div>
         </CardContent>
       </Card>
       
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;
