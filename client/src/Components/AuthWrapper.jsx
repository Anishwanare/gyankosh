import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LoginSignUp = ({ jsxElement, endPoint, showLogin }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.target.classList.contains("cursor-pointer")) {
      navigate(endPoint);
    }
  };

  return (
    <div className="flex flex-col lg:flex-col p-2 md:p-10 lg:mx-[30%] ">
      {/* Top Container */}
      <div className="bg-blue-400 rounded-t-2xl  flex flex-col items-center">
        <img src={logo} className="w-52" alt="" />
        <p className="text-3xl text-yellow-300 font-semibold">
          Neet Mock Test
        </p>
        <p className="text-xl my-5 text-white">
          Price:{" "}
          <span className="px-3 text-black rounded bg-yellow-300">{"₹"}599/-</span>
        </p>
        <p className="text-white font-bold text-xl">9 Week Neet Mock Test</p>
      </div>

      {/* Toggler and Forms */}
      <div className="p-3 border border-blue-400 rounded-b-2xl lg:p-5">
        <div className="flex gap-4">
          <div
            className={
              showLogin ? "cursor-pointer" : "bg-blue-400 px-2 text-white"
            }
            onClick={handleClick}
          >
            Register
          </div>
          <div
            className={
              showLogin ? "bg-blue-400 px-2 text-white" : "cursor-pointer"
            }
            onClick={handleClick}
          >
            Login
          </div>
        </div>
        <hr className=" h-[2px] bg-blue-900" />

        <div className="mt-6">{jsxElement}</div>
      </div>
    </div>
  );
};

export default LoginSignUp;
