import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { useState } from "react";
import { useNavigate } from "raviger";

import type { ContactRecord } from "@/types";

const CreateNew = ({ handleCreate }: { handleCreate: (newRecord: ContactRecord) => void }) => {
  const [date, setDate] = useState<Date>();
  const [firstPartnerName, setFirstPartnerName] = useState<string>("");
  const [secondPartnerName, setSecondPartnerName] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div className="px-20">
      <Label>First Partner's Name</Label>
      <Input
        className="mb-4"
        onChange={(e) => setFirstPartnerName(e.target.value)}
        value={firstPartnerName}
      />
      <Label>Second Partner's Name</Label>
      <Input
        className="mb-4"
        onChange={(e) => setSecondPartnerName(e.target.value)}
        value={secondPartnerName}
      />
      <Label>Date of Contact</Label>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className={cn(
                "w-[240px] justify-start text-left font-normal mb-4",
                !date && "text-muted-foreground"
              )}
              variant={"outline"}
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
      <div className="flex gap-3 justify-end">
        <Button
          onClick={() => {
            navigate("/");
          }}
          variant="secondary"
        >
          Cancel
        </Button>
        <Button
          disabled={!date || !firstPartnerName || !secondPartnerName}
          onClick={() => {
            handleCreate({ date, firstPartnerName, secondPartnerName });
            navigate("/");
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export { CreateNew };
