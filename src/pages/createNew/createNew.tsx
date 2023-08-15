// First Partner's name
// Second Partner's name
// Date of Fight
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { useState } from "react";

const CreateNew = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="px-20">
      <Label>First Partner's Name</Label>
      <Input className="mb-4" />
      <Label>Second Partner's Name</Label>
      <Input className="mb-4" />
      <Label>Date of Conflict</Label>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export { CreateNew };
