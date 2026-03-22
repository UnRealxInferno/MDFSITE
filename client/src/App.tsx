import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Donations from "@/pages/Donations";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/donate" component={Donations} />
      <Route component={NotFound} />
    </Switch>
  );
}
