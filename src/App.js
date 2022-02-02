import { Switch, Route } from "react-router-dom";

//Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Vendors from "./pages/Vendors";

//Components
import PrivateRoute from "./components/PrivateRoute";
import ResetPassword from "./pages/ResetPassword";
import { useAuth } from "./contexts/authContext";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          {!user ? <Login /> : <Dashboard />}
        </Route>
        <Route path="/password-reset">
          <ResetPassword />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders />
        </PrivateRoute>
        <PrivateRoute path="/customers">
          <Customers />
        </PrivateRoute>
        <PrivateRoute path="/vendors">
          <Vendors />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
