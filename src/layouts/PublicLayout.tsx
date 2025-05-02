import Navbar from "@/components/Navbar"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import useUserStore from "@/store/userStore";
import { dummyCourses } from "@/assets/dummy-datas/course";

export default function PublicLayout() {
  const {user} = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
      if(!user) {
        return;
      }

      switch(user.role) {
        case "Stundent":
          navigate("/student");
          break;
        case "Teacher":
          navigate("/teacher");
          break;
        case "Admin":
          navigate("/admin");
          break;
        default:
          navigate("/");
      }

  },[])

  useEffect(() => {
    localStorage.setItem("Course", JSON.stringify(dummyCourses));
  },[])

  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  )
}
