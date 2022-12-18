import { Outlet } from "react-router-dom";
import React from "react";
import "../App.css";

function Layout() {
  return (
    <>
      <div>
        <div className="d-flex lay">
          <div className="cent border">
            <div className="expand-lg ">
              <div className="header">
                
              </div>

              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
