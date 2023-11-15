import React from "react";

const Layout = ({ children }) => {
  const style = {
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={style}>{children}</div>;
};

export default Layout;
