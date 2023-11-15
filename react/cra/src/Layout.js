import React from "react";

const Layout = ({ children }) => {
  const style = {
    display: "flex",
    width: "100%",
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={style}>{children}</div>;
};

export default Layout;
