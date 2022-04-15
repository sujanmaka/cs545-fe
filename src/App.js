import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import AuthService from "./service.js/auth.service";
import EventBus from "./common/EventBus";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return { currentUser } ? (
    <BrowserRouter>
      <Dashboard />
      <Link to="/login" onClick={logOut}>
        Logout
      </Link>
    </BrowserRouter>
  ) : (
    <Link to="/login"> Login</Link>
  );
}

export default App;
