import React from 'react';
import { Link } from 'react-router-dom';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Sidebar = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <span className="brand-text font-weight-light">School</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info">
              <a href="/" className="d-block">
                Tony Augusto
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <a href="/" className="nav-link active">
                  <i className="nav-icon fas" />
                  <p>
                    Professores
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/teachers" className="nav-link">
                      <i className="far nav-icon" />
                      <FormatListBulletedIcon
                        className="mr-2"
                        fontSize="small"
                        style={{ marginTop: -3 }}
                      />
                      <p>Listar todos</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/teachers/new" className="nav-link">
                      <i className="far nav-icon" />
                      <AddCircleOutlineIcon
                        className="mr-2"
                        fontSize="small"
                        style={{ marginTop: -5 }}
                      />
                      <p>Cadastrar</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview menu-open">
                <a href="/" className="nav-link active">
                  <i className="nav-icon fas" />
                  <p>
                    Cursos
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/courses" className="nav-link">
                      <i className="far nav-icon" />
                      <FormatListBulletedIcon
                        className="mr-2"
                        fontSize="small"
                        style={{ marginTop: -3 }}
                      />
                      <p>Listar todos</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/course/new" className="nav-link">
                      <i className="far nav-icon" />
                      <AddCircleOutlineIcon
                        className="mr-2"
                        fontSize="small"
                        style={{ marginTop: -5 }}
                      />
                      <p>Cadastrar</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
};

export default Sidebar;
