// import { useState } from 'react'
// import "./App.css";
// import { Step1 } from "./pages/step1/step1";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { CreateNew } from "@/pages/createNew/createNew";
import { Entry } from "./pages/entry/entry";
import { useRoutes } from "raviger";
import { Label } from "./components/ui/label";
import { useEffect, useState } from "react";
import type { ContactRecord } from "./types";

import * as amplitude from "@amplitude/analytics-browser";

function App() {
  const [records, setRecords] = useState<ContactRecord[]>([]);
  useEffect(() => {
    amplitude.init("0131d13c016dd10567fe691120da404", {
      defaultTracking: true,
    });
  }, []);

  const handleCreate = (newRecord: ContactRecord) => {
    amplitude.track("Create New Record");
    setRecords([...records, newRecord]);
  };

  const routes = {
    "/": () => <Entry records={records} />,
    "/new": () => <CreateNew handleCreate={handleCreate} />,
    // '/users/:userId': ({ userId }) => <User id={userId} />
  };
  const route = useRoutes(routes);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-center py-6">
        <div>
          <div className="flex justify-end">
            <ModeToggle />
          </div>
          <div className="flex justify-center max-w-lg">
            <div className="flex flex-col">
              <Label>Contact Records</Label>
              <Card className="mt-1 p-6">{route}</Card>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
