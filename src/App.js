import React, { useState, useEffect } from "react";
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

import { db } from "./firebase-config";
import { collection, query, where, onSnapshot } from "firebase/firestore";

function App() {
  const { user } = useAuth();
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    setLoading(true);
    try {
      const data = query(
        collection(db, "vendors"),
        where("verified", "==", true)
      );
      onSnapshot(data, (querySnapshot) => {
        setVendors(
          querySnapshot.docs.map((doc) => ({
            data: doc.data(),
          }))
        );
        setLoading(false);
      });
    } catch (error) {
      setErr(error.message);
      setLoading(false);
    }
  }, []);

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
          <Dashboard vendors={vendors} err={err} loading={loading} />
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders />
        </PrivateRoute>
        <PrivateRoute path="/customers">
          <Customers />
        </PrivateRoute>
        <PrivateRoute path="/vendors">
          <Vendors vendors={vendors} err={err} loading={loading} />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
