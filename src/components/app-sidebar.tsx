import * as React from "react";
import { LucidePackage, SproutIcon, BookOpenText, Users } from "lucide-react";

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
      title: "Digital Broker",
      url: "/admin",
      icon: SproutIcon,
    },
  navMain: [
    {
      title: "Listing",
      url: "#",
      icon: LucidePackage,
      isActive: true,
      items: [
        {
          title: "Posts",
          url: "/admin/posts",
        },
        {
          title: "Verified",
          url: "/admin/verified-posts",
        },
        {
          title: "Pending",
          url: "/admin/pending-posts",
        },
        {
          title: "Requests",
          url: "/admin/pending-posts",
        },
      ],
    },
    {
      title: "Buyer Requests",
      url: "#",
      icon: BookOpenText,
      isActive: false,
      items: [
        {
          title: "Tour Requests",
          url: "/admin/posts",
        },
        {
          title: "Confirmation Requests",
          url: "/admin/verified-posts",
        },
        {
          title: "Appointment Calendar",
          url: "/admin/pending-posts",
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
            {data.logo.icon && <data.logo.icon />}
                <span className="font-bold text-xl tracking-[0.2rem]">{data.logo.title}</span>
          </SidebarMenuButton>
        </Link>
      </SidebarHeader>
      <SidebarContent >
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
