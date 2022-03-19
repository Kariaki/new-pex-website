import { Routes, Route } from "react-router-dom";

//Pages
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Vendors from "./pages/Vendors";
import UsersVendors from "./pages/UsersVendors";
import UsersSignup from "./pages/UsersSignup";
import UsersSignin from "./pages/UsersSignin";
import UsersMeals from "./pages/UsersMeals";
import VendorPage from "./pages/VendorPage";
import Home from "./pages/Home";

//Components
import UsersPrivateRoute from "./components/UsersPrivateRoute";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/password-reset" element={<ResetPassword />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/vendors" element={<Vendors />} />

        <Route path="/users/register" element={<UsersSignup />} />
        <Route path="/users/login" element={<UsersSignin />} />

        <Route element={<UsersPrivateRoute />}>
          <Route path="/users/vendors" element={<UsersVendors />} />
          <Route path="/users/meals" element={<UsersMeals />} />
          <Route path="/users/vendor/:id" element={<VendorPage />} />
        </Route>
        {/* <Route path="/" exact>
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
        <Route path="/sign-up">
          <UsersSignup />
        </Route>
        <Route path="/sign-in">
          <UsersSignin />
        </Route>
        <Route path="/users/vendors">
          <UsersVendors />
        </Route>
        <Route path="/users/meals">
          <UsersMeals />
        </Route>
        <Route path="/users/vendor/:id">
          <VendorPage />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
