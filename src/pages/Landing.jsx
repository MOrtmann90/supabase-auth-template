import "./landing.css";
import Login from "../components/Login";

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="absolute bg-bgColor/80 h-full w-full"></div>
      <Login />
    </div>
  );
};

export default Landing;
