import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4">

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-3xl font-extrabold text-indigo-600 hover:text-indigo-800">
              Brand
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList className="flex space-x-8">
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-lg font-medium text-gray-800 hover:text-indigo-600">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="text-lg font-medium text-gray-800 hover:text-indigo-600">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/shop" className="text-lg font-medium text-gray-800 hover:text-indigo-600">
              Shop
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg font-medium text-gray-800 hover:text-indigo-600">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-4 p-4 bg-white shadow-md rounded-lg">
                <li>
                  <NavigationMenuLink
                    href="/web-dev"
                    className="block text-gray-800 hover:text-indigo-600 hover:underline"
                  >
                    Web Development
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="/design"
                    className="block text-gray-800 hover:text-indigo-600 hover:underline"
                  >
                    Design
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>


      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/login"
              className="px-5 py-2 text-lg font-medium text-gray-800 border border-gray-300 rounded-lg hover:text-indigo-600 hover:border-indigo-600"
            >
              Login
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/sign-up"
              className="px-5 py-2 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Sign Up
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
