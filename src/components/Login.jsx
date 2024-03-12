import "./login.css";
import { useState } from "react";
import { supabase } from "../supabase/client.js";
import ToastError from "./ToastError.jsx";

import { FaRegEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [passVisible, setPassVisible] = useState(false);

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

  const handleLabelClick = () => {
    setPassVisible(!passVisible);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        {error && <ToastError error={error} setError={setError} />}
        <input
          id="email-input"
          className="form-input"
          type="email"
          name="email"
          placeholder="correo@correo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative">
          <input
            id="pass-input"
            className="relative form-input"
            type={passVisible ? "text" : "password"}
            name="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label
            htmlFor="pass-input"
            className="password-label"
            onClick={handleLabelClick}
          >
            {passVisible ? (
              <TbEyeClosed className="eye-icon" />
            ) : (
              <FaRegEye className="eye-icon" />
            )}
          </label>
        </div>

        <button className="btn-main">Ingresar</button>
      </form>
    </>
  );
};

export default Login;
