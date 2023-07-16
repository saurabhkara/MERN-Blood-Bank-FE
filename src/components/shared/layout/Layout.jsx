import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
export default function Layout({ children }) {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </>
  );
}
