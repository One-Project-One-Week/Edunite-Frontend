import * as React from "react";
import { Library, SproutIcon, BookOpenText, Users } from "lucide-react";

import { NavMain} from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// This is sample data.
const data = {
  logo:{
      title: "Edunite",
      url: "/admin",
      icon: SproutIcon,
    },
  navMain: [
    {
      title: "Courses",
      url: "#",
      icon: Library,
      isActive: true,
      items: [
        {
          title: "All Courses",
          url: "/admin/courses",
        },
        {
          title: "Started Courses",
          url: "/admin/started-courses",
        },
      ],
    },
    {
      title: "Requests",
      url: "#",
      icon: BookOpenText,
      isActive: false,
      items: [
        {
          title: "Student Requests",
          url: "/admin/request/student-requests",
        },
        {
          title: "Course Requests",
          url: "/admin/request/create-course-requests",
        },
        {
          title: "Teacher Requests",
          url: "/admin/request/teacher-requests",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
      isActive: false,
      items: [
        {
          title: "All Users",
          url: "/admin/users",
        },
        {
          title: "Sellers",
          url: "/admin/verified-posts",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link to="/admin">
          <SidebarMenuButton tooltip={data.logo.title} className="flex align-center justify-center ">
            {data.logo.icon && <data.logo.icon className="text-purple-heart-600" />}
                <span className="font-bold text-xl tracking-[0.2rem] text-purple-heart-600">{data.logo.title}</span>
          </SidebarMenuButton>
        </Link>
      </SidebarHeader>
      <SidebarContent >
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
