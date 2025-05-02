import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucideNotepadText } from "lucide-react";
import {  Teacher } from "@/types/User";



export default function TeacherRow({ user }: { user: Teacher }) {


  return (
    <TableRow key={user.id} className="hover:bg-purple-50 transition-colors duration-200">
      <TableCell className="text-purple-400 font-medium">{user.name}</TableCell>
      <TableCell className="text-gray-700">{user.email}</TableCell>
      <TableCell className="text-gray-700">{user.phone_number}</TableCell>
      
      <TableCell className="text-gray-700 text-center">{user.subjects[0].name}</TableCell>
      <TableCell className="text-gray-700 text-center">{user.created_courses?.length}</TableCell>
      <TableCell className="text-gray-700 text-center">{user.subjects_type}</TableCell>
      
      <TableCell className="text-right">
        <div className="flex justify-end items-center gap-2">
          <Button variant="outline" size="sm" className="hover:bg-purple-heart-100 text-purple-heart-700 relative group border-purple-heart-200">
            <LucideNotepadText className="w-4 h-4" />
            <span className="absolute top-0 left-[-100px] hidden group-hover:block px-3 py-2 text-purple-400 bg-opacity-50 bg-purple-300 rounded-lg">View Profile</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>

  )
}
