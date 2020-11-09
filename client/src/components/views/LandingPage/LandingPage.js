import React, { useEffect } from "react";
import Axios from "axios";
const LandingPage = (props) => {
  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    Axios.get("/api/hello").then((response) => console.log(response.data));
  };

  const onClickHandler = () => {
    Axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃실패");
      }
    });
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
      <button onClick={onClickHandler}>LogOut</button>
    </div>
  );
};

export default LandingPage;
