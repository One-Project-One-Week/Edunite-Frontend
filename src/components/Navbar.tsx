import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Logo from "@/assets/logo.png"; // Assuming you have a logo image

export default function Navbar() {
  return (
   <nav className="flex items-center justify-between">
     
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
              <NavigationMenuLink href="/courses" className="text-lg font-medium text-purple-heart-600 hover:text-purple-heart-800">
                Courses
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/learning-path" className="text-lg font-medium text-purple-heart-600 hover:text-purple-heart-800">
                Learning Path
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/blogs" className="text-lg font-medium text-purple-heart-600 hover:text-purple-heart-800">
                Blogs
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
      </div>
  
   </nav>
  );
}
