// import { useState } from 'react'
// import "./App.css";
// import { Step1 } from "./pages/step1/step1";
import { CreateNew } from "./pages/createNew/createNew";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-center py-6">
        <div>
          <div className="flex justify-end">
            <ModeToggle />
          </div>
          <div className="flex justify-center max-w-lg">
            <div className="flex flex-col">
              <CreateNew />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
