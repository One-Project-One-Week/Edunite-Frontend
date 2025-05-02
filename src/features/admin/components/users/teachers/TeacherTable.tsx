import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import TeacherRow from "./TeacherRow";
import { useQuery } from "@tanstack/react-query";
import { getAllTeachersOptions } from "@/queries/userQueryOptions";
import { Teacher } from "@/types/User";
import Loading from "@/components/Loading";

export default function TeacherTable() {
    
    const {data:users, isLoading} = useQuery(getAllTeachersOptions());

    return (
        <section className="px-5 rounded-lg mt-5 max-h-[24rem] overflow-y-auto">
            {isLoading? <Loading /> : (<Table className="bg-white rounded-lg shadow-lg">
                <TableHeader>
                    <TableRow className="bg-white-lilac-50 ">
                        <TableHead className="text-purple-600  font-semibold uppercase tracking-wide">Name</TableHead>
                        <TableHead className="text-purple-600 font-semibold uppercase tracking-wide">Email</TableHead>
                        <TableHead className="text-purple-600  font-semibold uppercase tracking-wide">Phone Number</TableHead>
                        <TableHead className="text-purple-600  text-center font-semibold uppercase tracking-wide">Subjects</TableHead>
                        <TableHead className="text-purple-600  text-center font-semibold uppercase tracking-wide">Courses</TableHead>
                        <TableHead className="text-purple-600  text-center font-semibold uppercase tracking-wide">Status</TableHead>
                        <TableHead className="text-purple-600  text-right font-semibold uppercase tracking-wide">Action</TableHead>
                    </TableRow>

                </TableHeader>
                <TableBody>
                    {users.flatMap((user:Teacher) =>
                        user.role === "Teacher" ? [<TeacherRow key={user.id} user={user} />] : []
                    )}

                </TableBody>
            </Table>)}
        </section>
    )
}
