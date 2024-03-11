import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase/client";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Auth-template";
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/");
      } else {
        setIsAuthenticated(session.user.aud ? true : false);
        navigate("/home");
      }
    });
  }, [isAuthenticated]);

  return (
    <main className="main-app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Landing />}
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
