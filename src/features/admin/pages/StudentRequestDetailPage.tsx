import AdminBreadCrumb from "@/components/AdminBreadCrumb";
import StudentRequestDetail from "../components/requests/StudentRequestDetail";


export default function StudentRequestDetailPage() {
  return (
    <div>
        <AdminBreadCrumb currentPageTitle="Detail" links={[{name: "Student Requests", path: "/admin/request/student-requests"}]} />
        <StudentRequestDetail />
    </div>
  )
}
