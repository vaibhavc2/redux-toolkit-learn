import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  // const disptach = useDispatch();
  const handler = () => {
    useDispatch({
      type: "myFirstCase",
      payload: ["btc", "eth", "xrp"]
    });
  };
  return (
    <div className="mx-5">
      Home
      <button onClick={handler} className="mt-5 p-3">
        Click Me
      </button>
    </div>
  );
};

export default Home;
