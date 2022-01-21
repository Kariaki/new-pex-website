import { Switch, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Businesses from "./pages/Businesses";

//Components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/customers">
          <Customers />
        </Route>
        <Route path="/businesses">
          <Businesses />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
