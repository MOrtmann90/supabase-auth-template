import { FaXmark } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";

import { useEffect, useState } from "react";

import "./toastError.css";

const ToastError = ({ error, setError }) => {
  useEffect(() => {
    console.log("Se ejecutó useEffect");
    const timer = setTimeout(() => {
      closeToast();
    }, 3500);
    return () => clearTimeout(timer);
  }, [error]);

  const closeToast = () => {
    setError(false);
  };

  return (
    <div className="toast-container">
      <div className="toast-warn">
        <FaTriangleExclamation className="size-7" />
      </div>
      <h2 className="toast-text">Error! Credenciales inválidas</h2>
      <div className="toast-icon-div group">
        <FaXmark
          className="toast-close-icon group-hover:text-white"
          onClick={closeToast}
        />
      </div>
    </div>
  );
};

export default ToastError;
