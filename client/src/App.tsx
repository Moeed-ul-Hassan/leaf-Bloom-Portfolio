import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/queryClient";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Preloader from "@/components/Preloader";

// Import global styles
import '@/styles/animations.css';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
