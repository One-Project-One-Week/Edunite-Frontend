import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserRow from "./UserRow";
import { useQuery } from "@tanstack/react-query";
import { BaseUser } from "@/types/User";
import Loading from "@/components/Loading";
import { getAllUsersOptions } from "@/queries/userQueryOptions";

export default function UserTable() {
  
  const {data:users, isLoading} = useQuery(getAllUsersOptions());

  return (
    <section className="px-5 rounded-lg mt-5 max-h-[24rem] overflow-y-auto">
      {isLoading? <Loading /> : (<Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow className="bg-white-lilac-50 ">
            <TableHead className="text-purple-heart-600  font-semibold uppercase tracking-wide">Name</TableHead>
            <TableHead className="text-purple-heart-600 font-semibold uppercase tracking-wide">Email</TableHead>
            <TableHead className="text-purple-heart-600  font-semibold uppercase tracking-wide">Phone Number</TableHead>
            <TableHead className="text-purple-heart-600  text-center font-semibold uppercase tracking-wide">Role</TableHead>
            <TableHead className="text-purple-heart-600  text-right font-semibold uppercase tracking-wide">Action</TableHead>
          </TableRow>

        </TableHeader>
        <TableBody>
          {users.map((user: BaseUser) => {
            return (
              <UserRow
                key={user.id}
                user={user}
              />
            )
          })}
        </TableBody>
      </Table>)}
    </section>
  )
}
