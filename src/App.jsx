import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner.jsx";

import SidebarLayout from "./components/layouts/sidebar.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
          <Router>
            <Routes>
              <Route path="/" element={<SidebarLayout />}>
                <Route index element={<Index />} />
                {/* Add more routes here as needed */}
              </Route>
            </Routes>
          </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;