import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import PostTable from "../components/listing/PostTable"
import Header from "../components/listing/Header"
import PaginationComponent from "@/components/PaginationComponent"

export default function AllPostPage() {
  return (
    <div>
      <h1 className="px-5 mb-5 text-xl font-bold">Posts</h1>
      <AdminBreadCrumb currentPageTitle="All Posts"/>
      <Header />
      <PostTable />
      <PaginationComponent />
    </div>
  )
}