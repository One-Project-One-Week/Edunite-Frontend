import AdminPostVerifyForm from "./AdminPostVerifyForm"
import PendingPostLists from "./PendingPostLists"


export default function PendingLayout() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5 px-5">
        <AdminPostVerifyForm />
        <PendingPostLists />
    </div>
  )
}
