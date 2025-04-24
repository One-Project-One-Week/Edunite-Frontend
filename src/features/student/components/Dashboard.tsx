import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, GraduationCap } from "lucide-react";

const enrolledCourses = [
  { title: "React Basics", instructor: "Jane Smith", progress: 80 },
  { title: "Next.js Intermediate", instructor: "John Doe", progress: 60 },
];

const upcomingAssignments = [
  { title: "React Hooks Quiz", dueDate: "2025-04-30" },
  { title: "Next.js Project", dueDate: "2025-05-05" },
];

const certificates = [
  { course: "HTML & CSS", date: "2024-12-15" },
  { course: "JavaScript Basics", date: "2025-01-20" },
];

export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-white to-purple-50 min-h-screen">

      {/* Left - Overview Cards */}
      <div className="lg:col-span-1 space-y-6">
        <h1 className="text-3xl font-bold text-purple-800">Welcome, Alex!</h1>
        <p className="text-gray-600">Keep learning and tracking your progress.</p>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <GraduationCap className="text-purple-600 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Courses Enrolled</p>
                <p className="text-xl font-semibold">2</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <ClipboardCheck className="text-purple-600 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Certificates</p>
                <p className="text-xl font-semibold">2</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-purple-800 mb-4">Certificates</h2>
            <ul className="space-y-2">
              {certificates.map((cert, i) => (
                <li key={i} className="flex justify-between text-sm text-gray-700">
                  <span>{cert.course}</span>
                  <span className="text-gray-500">{cert.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Right - Courses and Assignments */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-purple-800 mb-4">Enrolled Courses</h2>
            <ul className="space-y-3">
              {enrolledCourses.map((course, i) => (
                <li key={i} className="border rounded p-4 flex justify-between items-center hover:bg-purple-50">
                  <div>
                    <p className="font-medium text-purple-700">{course.title}</p>
                    <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                  </div>
                  <p className="text-sm text-purple-600 font-semibold">Progress: {course.progress}%</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-purple-800 mb-4">Upcoming Assignments</h2>
            <ul className="space-y-3">
              {upcomingAssignments.map((a, i) => (
                <li key={i} className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">{a.title}</span>
                  <span className="text-sm text-gray-500">Due: {a.dueDate}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button className="bg-purple-600 text-white hover:bg-purple-700">Join New Course</Button>
          <Button variant="outline" className="text-purple-700 border-purple-600">View Grades</Button>
        </div>
      </div>
    </div>
  );
}
