import PaginationComponent from "@/components/PaginationComponent"
import Header from "../components/users/Header"
import UserTable from "../components/users/UserTable"
import AdminBreadCrumb from "@/components/AdminBreadCrumb"

export default function AllUserPage() {
  return (
    <div>
      <h1 className="px-5 mb-5 text-xl font-bold">Users</h1>
      <AdminBreadCrumb currentPageTitle="All Users"/>
      <Header />
      <UserTable />
      <PaginationComponent />
    </div>
  )
}
