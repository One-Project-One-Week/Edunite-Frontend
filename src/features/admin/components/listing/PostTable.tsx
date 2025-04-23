import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { mockPosts } from "@/features/admin/data/postData";
import PostRow from "./PostRow";

export default function PostTable() {
  return (
    <section className="px-5 rounded-lg mt-5 max-h-[24rem] overflow-y-auto">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Post ID</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>House Type</TableHead>
            <TableHead className="text-center">Verified</TableHead>
            <TableHead className="text-center">Active</TableHead>
            <TableHead className="text-center">Title</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockPosts.map((post) => {
            return (
              <PostRow
                key={post.postID}
                post={post}
               />
            )
          })}
        </TableBody>
      </Table>
    </section>
  )
}

