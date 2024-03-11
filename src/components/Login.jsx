import "./login.css";
import { useState } from "react";
import { supabase } from "../supabase/client.js";
import ToastError from "./ToastError.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        {error && <ToastError error={error} setError={setError} />}
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="correo@correo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-main">Ingresar</button>
      </form>
    </>
  );
};

export default Login;
