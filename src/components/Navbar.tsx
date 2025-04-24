import Logo from "@/assets/logo.png"; // Assuming you have a logo image
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white-lilac-50">

      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" >
                <img src={Logo} alt="" className="w-40 h-25" />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center space-x-8">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-8">

            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="text-lg font-medium text-purple-heart-600 hover:text-purple-heart-800">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/dashboard/student/listing" className="text-lg font-medium text-purple-heart-600 hover:text-purple-heart-800">
                Courses
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/learning-path" className="text-lg font-medium text-purple-heart-600 hover:text-purple-heart-800">
                Learning Path
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/dashboard/student/course-request-form" className="text-lg font-medium text-purple-heart-600 hover:text-purple-heart-800">
                Request
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>


        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/login"
                className="px-6 py-2 text-lg font-medium 
                text-purple-heart-600 border border-purple-heart-600 rounded-full
                  hover:text-white-lilac-50 hover:bg-purple-heart-800"
              >
                Let's do it
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

<Link to={"/dashboard/student/profile"} className="flex items-center">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Student Avatar" />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        </Link>
      </div>

    </nav>
  );
}
