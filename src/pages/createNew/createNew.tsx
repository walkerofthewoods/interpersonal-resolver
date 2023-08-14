// First Partner's name
// Second Partner's name
// Date of Fight
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const createNew = () => {
  return (
    <>
      <Label>First Partner's Name</Label>
      <Input />
      <Label>Second Partner's Name</Label>
      <Input />
    </>
  );
};

export { createNew };
