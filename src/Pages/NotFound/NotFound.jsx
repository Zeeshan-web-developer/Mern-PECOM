import React from "react";
import logo from "../../assets/notfound.png";
function NotFound() {
  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <img src={logo} alt="not found" srcset="" height="auto" width="50%" />
    </div>
  );
}

export default NotFound;
