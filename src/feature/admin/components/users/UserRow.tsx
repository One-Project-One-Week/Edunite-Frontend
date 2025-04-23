import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
import { LucideNotepadText } from "lucide-react";
import { Link } from "react-router-dom";
import { User } from "@/types/User";

type UserRowProps = {
    user: User;
}

export default function UserRow({user: { id, name, email, phone_number, role}}: UserRowProps) {
  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{phone_number}</TableCell>
        <TableCell className="text-center">{role}</TableCell>
        <TableCell className="text-right flex gap-1 justify-end">
          <Link to={"/admin"}>
            <Button variant="outline" size="sm">
              <LucidePencil />
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            <LucideTrash2 />
          </Button>
          <Link to="/admin">
            <Button variant="outline" size="sm">
              <LucideNotepadText />
            </Button>
          </Link>
        </TableCell>
      </TableRow>
    </>
  )
}
