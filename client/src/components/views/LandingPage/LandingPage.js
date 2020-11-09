import React, { useEffect } from "react";
import Axios from "axios";
const LandingPage = () => {
  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    Axios.get("/api/hello").then((response) => console.log(response.data));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작페이지</h2>
    </div>
  );
};

export default LandingPage;
