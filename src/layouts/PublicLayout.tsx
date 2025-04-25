import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"

export default function PublicLayout() {

  localStorage.removeItem('User');

  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  )
}
