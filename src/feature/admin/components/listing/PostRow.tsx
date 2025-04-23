import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2 } from "lucide-react";
import { LucideNotepadText } from "lucide-react";
import { Link } from "react-router-dom";
import { Post } from "@/types/Post";
import { users } from "@/admin/data/userData";


type PostRowProps = {
  post: Post;
}

export default function PostRow({ post }: PostRowProps) {
  const { postID, user_id, address, price, area, house_type, isVerify, isActive, title } = post;

  return (
  <TableRow>
    <TableCell>{postID}</TableCell>
    <TableCell>{users.find((user) => user.id === user_id)?.name}</TableCell>
    <TableCell>{address}</TableCell>
    <TableCell>{price}</TableCell>
    <TableCell>{area}</TableCell>
    <TableCell>{house_type}</TableCell>
    <TableCell className="text-center">{isVerify ? "Yes" : "No"}</TableCell>
    <TableCell className="text-center">{isActive ? "Yes" : "No"}</TableCell>
    <TableCell className="text-center">{title}</TableCell>
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
  );
}
