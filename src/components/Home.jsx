import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function nextHandler() {
    navigate("/about");
  }

  function prevHandler() {
    navigate(-1);
  }

  return (
    <div className="flex flex-col justify-center gap-3 items-center h-[100vh]">
      <div className=" ">Home</div>
      <div className="flex gap-3">
        <button
          className="border-2 bg-green-400 px-3 py-1 rounded-xl"
          onClick={nextHandler}
        >
          front
        </button>
        <button
          className="border-2 bg-green-400 px-3 py-1 rounded-xl"
          onClick={prevHandler}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default Home;
