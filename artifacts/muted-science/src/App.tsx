import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ReleaseMS001 from "@/pages/ReleaseMS001";
import Checkout from "@/pages/Checkout";
import Shop from "@/pages/Shop";
import SystemIndex from "@/pages/SystemIndex";
import Releases from "@/pages/Releases";
import Signals from "@/pages/Signals";
import Objects from "@/pages/Objects";
import Archive from "@/pages/Archive";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/releases" component={Releases} />
      <Route path="/signals" component={Signals} />
      <Route path="/objects" component={Objects} />
      <Route path="/archive" component={Archive} />
      <Route path="/system" component={SystemIndex} />
      <Route path="/releases/ms-001-pronounced-love" component={ReleaseMS001} />
      <Route path="/checkout/ms-001" component={Checkout} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
