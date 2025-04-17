import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import PendingLayout from "../components/listing/PendingLayout"

export default function PendingPostPage() {
  return (
    <div>
        <AdminBreadCrumb currentPageTitle="Pending Posts" />
        <PendingLayout />
    </div>
  )
}
