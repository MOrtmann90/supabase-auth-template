import { supabase } from "../supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="flex-1">
        <h1 className="">Home content</h1>
      </div>
    </>
  );
};

export default Home;
