import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import StudentRow from "./StudentRow";
import { Stundent } from "@/types/User";
import { useQuery } from "@tanstack/react-query";
import { getAllStudentsOptions } from "@/queries/userQueryOptions";
import Loading from "@/components/Loading";

export default function StudentTable() {
    
    const {data:users, isLoading} = useQuery(getAllStudentsOptions());


    return (
        <section className="px-5 rounded-lg mt-5 max-h-[24rem] overflow-y-auto">
            {isLoading? <Loading /> : (<Table className="bg-white rounded-lg shadow-lg">
                <TableHeader>
                    <TableRow className="bg-white-lilac-50 ">
                        <TableHead className="text-purple-600  font-semibold uppercase tracking-wide">Name</TableHead>
                        <TableHead className="text-purple-600 font-semibold uppercase tracking-wide">Email</TableHead>
                        <TableHead className="text-purple-600 font-semibold uppercase tracking-wide">Grade</TableHead>
                        <TableHead className="text-purple-600  font-semibold uppercase tracking-wide">Phone Number</TableHead>
                        <TableHead className="text-purple-600  text-right font-semibold uppercase tracking-wide">Action</TableHead>
                    </TableRow>

                </TableHeader>
                <TableBody>

                    {users.flatMap( (user:Stundent) => 
                    user.role === "Stundent" ?[<StudentRow key={user.id} user={user}/>] : []
                    )}
                
                </TableBody>
            </Table>)}
        </section>
    )
}
