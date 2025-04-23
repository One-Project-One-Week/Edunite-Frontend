import { ScrollArea } from "@/components/ui/scroll-area";
import { mockPosts } from "@/features/admin/data/postData";
import { UserCircle } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function PendingPostLists() {
  const [date, setDate] = useState<Date>();

  return (
    <ScrollArea className="border rounded-lg h-[40rem] shadow-sm bg-white p-5">
      <section>
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">Pending Lists</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        {mockPosts
          .filter((post) => !post.isVerify)
          .map((post) => {
            return (
              <div className="w-full mt-5 p-3 bg-white hover:scale-95 duration-150 cursor-pointer border rounded-lg shadow-sm flex gap-3">
                <div className="flex bg-mint-julep-50 rounded-lg w-1/6 h-24 justify-center items-center flex-col">
                  <span className="text-xl text-mint-julep-700 font-bold">
                    Feb
                  </span>
                  <span className="text-xl text-mint-julep-700 font-bold">
                    12
                  </span>
                </div>
                <div className="p-2 w-5/6">
                  <p className="flex justify-start items-center text-sm text-gray-400">
                    <UserCircle size={20} />
                    <span className="ms-2">Jhon Doe</span>
                  </p>
                  <p className="mt-1 text-lg font-bold">{post.address}</p>
                </div>
              </div>
            );
          })}
      </section>
    </ScrollArea>
  );
}
