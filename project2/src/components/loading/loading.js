import React from "react";
import "./loading.css";
import ClockLoader from "react-spinners/ClockLoader";

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner">
        {" "}
        <ClockLoader
          size={150}
          color={"#FFFFFF"}
          loading={true}
        />
      </div>
    </div>
  );
};

export default Loading;
