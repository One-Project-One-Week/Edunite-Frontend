import PaginationComponent from "@/components/PaginationComponent"
import Header from "../components/users/allUsers/Header"
import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import TeacherTable from "../components/users/teachers/TeacherTable"

export default function AllTeacherPage() {



  return (
    <div>
      <h1 className="px-5 mb-5 text-xl font-bold">Users</h1>
      <AdminBreadCrumb currentPageTitle="Teachers"/>
      <Header />
      <TeacherTable />
      <PaginationComponent />
    </div>
  )
}
