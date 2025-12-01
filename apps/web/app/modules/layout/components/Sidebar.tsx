import { Link, useLocation } from "react-router";
import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react";
import "./Sidebar.css";

export function Sidebar() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    // For root path, exact match is required to avoid it being active for all routes
    if (path === "/" && location.pathname === "/") {
      return "nav-link active";
    }
    // For other paths, check if the current path starts with the link path
    if (path !== "/" && location.pathname.startsWith(path)) {
      return "nav-link active";
    }
    return "nav-link inactive";
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="brand-text">
          Projeto Porto Alegre
        </h2>
      </div>
      
      <nav className="sidebar-nav">
        <Link to="/" className={getLinkClass("/")}>
          <LayoutDashboard className="nav-icon" size={20} />
          Dashboard
        </Link>
        <Link to="/employees" className={getLinkClass("/employees")}>
          <Users className="nav-icon" size={20} />
          Funcionários
        </Link>
        <Link to="#" className="nav-link inactive">
          <Settings className="nav-icon" size={20} />
          Configurações
        </Link>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">
            A
          </div>
          <div className="user-info">
            <p className="user-name">Administrador</p>
            <p className="user-email">admin@portoalegre.com</p>
          </div>
          <button className="btn-logoff" title="Sair">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </aside>
  );
}