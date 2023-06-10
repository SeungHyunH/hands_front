import React, { useState } from "react";
import Login from "./Login.jsx";
import Join from "./Join.jsx";
import FindPassword from "./FindPassword.jsx";
const User = () => {
  const [mode, setMode] = useState("login");
  switch (mode) {
    case "login":
      return <Login setMode={setMode}></Login>;
    case "join":
      return <Join setMode={setMode}></Join>;
    case "findPassword":
      return <FindPassword setMode={setMode}></FindPassword>;
    default:
      return <Login setMode={setMode}></Login>;
  }
};

export default User;
