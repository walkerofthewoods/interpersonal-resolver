import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "raviger";
import type { ContactRecord } from "@/types";

const Entry = ({ records }: { records: ContactRecord[] }) => {
  const navigate = useNavigate();

  const sortedRecords = [...records];
  sortedRecords.sort((a, b) => b.date.valueOf() - a.date.valueOf());

  return (
    <>
      <Button
        className="block mb-10 mx-auto w-8/12"
        onClick={() => {
          navigate("/new");
        }}
      >
        Create New
      </Button>
      <Table>
        {!records.length && <TableCaption>No previous records</TableCaption>}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[130px]">Date</TableHead>
            <TableHead className="min-w-[130px]">Partner A</TableHead>
            <TableHead className="min-w-[130px]">Partner B</TableHead>
          </TableRow>
        </TableHeader>
        {sortedRecords.map((record, index) => {
          return (
            <TableBody key={index}>
              <TableRow>
                <TableCell>{record.date?.toDateString()}</TableCell>
                <TableCell>{record.firstPartnerName}</TableCell>
                <TableCell>{record.secondPartnerName}</TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </>
  );
};

export { Entry };
