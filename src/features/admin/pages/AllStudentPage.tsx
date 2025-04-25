import PaginationComponent from "@/components/PaginationComponent"
import Header from "../components/users/allUsers/Header"
import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import StudentTable from "../components/users/students/StudentTable"

export default function AllStudentPage() {



  return (
    <div>
      <h1 className="px-5 mb-5 text-xl font-bold">Users</h1>
      <AdminBreadCrumb currentPageTitle="All Students"/>
      <Header />
      <StudentTable />
      <PaginationComponent />
    </div>
  )
}
