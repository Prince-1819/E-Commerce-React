import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../CSS Module/Header.module.css";
import { logout } from "../store/authSlice";

const Header = () => {
  // Get the authentication status from the Redux store
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action to clear authentication data
    navigate("/login");
  };

  return (
    <div className={`py-3 border-bottom ${styles.header}`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            <img
              src="/logo.png"
              alt="logo"
              style={{ height: "60px", width: "100px" }}
            />
          </Link>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-warning nav-link" : "text-white nav-link"
                }
              >
                <i className="bi bi-house me-1"></i>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "text-warning nav-link" : "text-white nav-link"
                }
              >
                <i className="bi bi-house me-1"></i>
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "text-warning nav-link" : "text-white nav-link"
                }
              >
                <i className="bi bi-cart3 me-1"></i>
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-warning nav-link" : "text-white nav-link"
                }
              >
                <i className="bi bi-telephone me-1"></i>
                Contact Us
              </NavLink>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className="text-white nav-link"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-door-open me-1"></i>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className="text-white nav-link">
                    <i className="bi bi-box-arrow-in-right me-1"></i>
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
