import { supabase } from "../supabase/client";

const LogoutBtn = () => {
  return (
    <button
      className="btn-sec m-2"
      onClick={async () => {
        await supabase.auth.signOut();
      }}
    >
      Salir
    </button>
  );
};

export default LogoutBtn;
