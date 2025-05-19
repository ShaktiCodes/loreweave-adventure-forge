
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CampaignsPage from "./pages/CampaignsPage";
import CreatePage from "./pages/CreatePage";
import GamePage from "./pages/GamePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-1 pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/campaigns" element={<CampaignsPage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/play" element={<GamePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
