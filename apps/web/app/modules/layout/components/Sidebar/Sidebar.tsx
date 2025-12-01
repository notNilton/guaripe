import { Link, useLocation } from "react-router";
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
          <span className="nav-icon">🏠</span>
          Dashboard
        </Link>
        <Link to="/employees" className={getLinkClass("/employees")}>
          <span className="nav-icon">👥</span>
          Funcionários
        </Link>
        <Link to="#" className="nav-link inactive">
          <span className="nav-icon">⚙️</span>
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
        </div>
      </div>
    </aside>
  );
}