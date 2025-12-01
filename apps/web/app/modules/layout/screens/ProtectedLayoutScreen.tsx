import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";
import "./ProtectedLayout.style.css";

export function ProtectedLayoutScreen() {
  return (
    <div className="layout-container">
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        <div className="background-effects">
           <div className="blob-blue" />
           <div className="blob-purple" />
        </div>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
