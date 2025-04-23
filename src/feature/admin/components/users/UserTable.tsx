import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import {users} from "@/admin/data/userData";
import UserRow from "./UserRow";

export default function UserTable() {
  return (
    <section className="px-5 rounded-lg mt-5 max-h-[24rem] overflow-y-auto">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead className="text-center">Role</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            return (
              <UserRow
                key={user.id}
                user={user}
               />
            )
          })}
        </TableBody>
      </Table>
    </section>
  )
}
