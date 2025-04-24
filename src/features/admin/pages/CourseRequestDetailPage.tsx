import AdminBreadCrumb from '@/components/AdminBreadCrumb'
import CourseRequestDetail from '../components/requests/CourseRequestDetail'

export default function CourseRequestDetailPage() {
  return (
    <div>
        <AdminBreadCrumb currentPageTitle="Detail" links={[{name: "Course Requests", path: "/admin/request/create-course-requests"}]} />
        <CourseRequestDetail />
    </div>
  )
}
