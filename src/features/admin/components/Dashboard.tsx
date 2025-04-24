// pages/dashboard/admin/AdminDashboard.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Simulating API call
type StudentRequest = {
    id: string;
    user_id: string;
    username: string;
    title: string;
    course_category: string;
    student_quantity: string[]; // still using string[] for dummy; can update later
  };
  
const AdminDashboard = () => {
  const [studentRequests, setStudentRequests] = useState<StudentRequest[]>([]);

  useEffect(() => {
    // Dummy data
    const dummyRequests: StudentRequest[] = [
      {
        id: "req-001",
        user_id: "stu-001",
        username: "Alice Lee",
        title: "React Fundamentals",
        course_category: "Frontend Development",
        student_quantity: ["stu-001", "stu-002", "stu-003"],
      },
      {
        id: "req-002",
        user_id: "stu-004",
        username: "Ben Carter",
        title: "Advanced JavaScript",
        course_category: "Frontend Development",
        student_quantity: ["stu-004", "stu-005"],
      },
      {
        id: "req-003",
        user_id: "stu-006",
        username: "Carla Smith",
        title: "UI/UX Design Basics",
        course_category: "Design",
        student_quantity: ["stu-006"],
      },
    ];

    setStudentRequests(dummyRequests);
  }, []);


  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Total Students */}
        <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700 mb-4">Total Students</h3>
          <p className="text-3xl font-bold text-purple-800">120</p> {/* Example number */}
        </div>

        {/* Total Courses */}
        <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700 mb-4">Total Courses</h3>
          <p className="text-3xl font-bold text-purple-800">15</p> {/* Example number */}
        </div>
      </div>

      {/* Student Requests Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-purple-700 mb-4">Student Requests</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-purple-100 text-left">
                <th className="px-4 py-2 text-sm font-medium text-purple-700">Title</th>
                <th className="px-4 py-2 text-sm font-medium text-purple-700">Requested By</th>
                <th className="px-4 py-2 text-sm font-medium text-purple-700">Category</th>
                <th className="px-4 py-2 text-sm font-medium text-purple-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentRequests.map((request) => (
                <tr key={request.id} className="border-b">
                  <td className="px-4 py-2">{request.title}</td>
                  <td className="px-4 py-2">{request.username}</td>
                  <td className="px-4 py-2">{request.course_category}</td>
                  <td className="px-4 py-2">
                    <Link to={`/admin/requests/${request.id}`} className="text-purple-600 hover:text-purple-800">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
