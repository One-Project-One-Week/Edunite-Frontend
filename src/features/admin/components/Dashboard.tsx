import { dummyCourses } from '@/assets/dummy-datas/course';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye } from 'lucide-react';
import { dummyStudentRequests } from '../data/studentRequestData';
import { ScrollArea } from '@/components/ui/scroll-area';

const AdminDashboard = () => {
  const courses = dummyCourses;

  return (
    <div className="bg-gray-50 p-8 min-h-screen">
      <h1 className="text-4xl font-extrabold text-purple-heart-700 mb-8 text-center">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {[
          { title: "Total Students", value: courses.reduce((total, request) => total + request.student_quantity.length, 0) },
          { title: "Total Courses", value: courses.length },
          { title: "Pending Requests", value: courses.filter((cor) => cor.status === "pending").length + dummyStudentRequests.filter((cor) => cor.status === "pending").length },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-purple-heart-600 to-purple-heart-400 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <h3 className="text-lg font-medium mb-2">{stat.title}</h3>
            <p className="text-4xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Course Requests</h3>
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Requested By</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.filter((cor) => cor.status === "pending").map((request) => (
                  <TableRow key={request.id} className="hover:bg-gray-100">
                    <TableCell>{request.title}</TableCell>
                    <TableCell>{request.username}</TableCell>
                    <TableCell>{request.course_category}</TableCell>
                    <TableCell>
                      <Link
                        to={`/admin/request/create-course-requests/${request.id}/${request.title}`}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Student Requests</h3>
          <div className="overflow-x-auto">
            <ScrollArea className="h-40">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Requested By</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyStudentRequests.filter((cor) => cor.status === "pending").map((request) => (
                    <TableRow key={request.id} className="hover:bg-gray-100">
                      <TableCell>{request.title}</TableCell>
                      <TableCell>{request.username}</TableCell>
                      <TableCell>{request.course_category}</TableCell>
                      <TableCell>
                        <Link
                          to={`/admin/request/student-requests/${request.id}/${request.title}`}
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
