import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucideNotepadText } from "lucide-react";
import { Stundent } from "@/types/User";



export default function StudentRow({ user }: { user: Stundent }) {


  return (
    <TableRow key={user.id} className="hover:bg-purple-heart-50 transition-colors duration-200">
      <TableCell className="text-purple-400 font-medium">{user.name}</TableCell>
      <TableCell className="text-gray-700">{user.email}</TableCell>
      <TableCell className="text-gray-700">Grade - {user.grade}</TableCell>
      <TableCell className="text-gray-700">{user.phone_number}</TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end items-center gap-2">
          <Button variant="outline" size="sm" className="hover:bg-purple-100 relative group text-purple-heart-700 border-purple-heart-200">
            <LucideNotepadText className="w-4 h-4" />
            <span className="absolute top-0 left-[-100px] hidden group-hover:block px-3 py-2 text-purple-400 bg-opacity-50 bg-purple-300 rounded-lg">View Profile</span>
          </Button>
          {/* <Link to={`/admin/${user.id}/details`}>
          <Button variant="outline" size="sm" className="hover:bg-purple-heart-100 text-purple-heart-700 border-purple-heart-200">
            <LucideNotepadText className="w-4 h-4" />
          </Button>
        </Link> */}
        </div>
      </TableCell>
    </TableRow>

  )
}
