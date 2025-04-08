import React, { useState } from "react";
import logo from "../../assets/logo1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Button from "../Atoms/Button";
import Icon from "../Atoms/Icons";
import Badge from "../Atoms/Badge";
import Avatar from "../Atoms/Avatar";

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showTravelers, setShowTravelers] = useState(false);
  const [notifications] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm p-2 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" style={styles.logo} />
          <span style={styles.brandText}>fleet</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-lg-3 dropdown position-relative">
            <Button color="trans" onClick={() => setShowTravelers(!showTravelers)}>
              Travelers ▾
            </Button>
            {showTravelers && (
              <ul className="dropdown-menu show position-absolute">
                <li><a className="dropdown-item" href="/">Option 1</a></li>
                <li><a className="dropdown-item" href="/">Option 2</a></li>
              </ul>
            )}
          </div>

          <div className="ms-auto d-flex align-items-center flex-wrap">
            <a href="/" className="text-muted me-3" style={styles.noUnderline}>Support</a>

            <a href="/" className="text-muted me-3 d-flex align-items-center" style={styles.noUnderline}>
              <Icon name="globe" size={20} className="me-1" />
              <i className="bi bi-globe"></i>
              <span className="ms-1">Language</span>
            </a>

            <Button color="trans">List your property</Button>

            <div className="position-relative me-3" onClick={() => setShowNotifications(!showNotifications)}>
              <Button color="trans" shape="small-circle">
                <i className="bi bi-bell text-muted" style={{ fontSize: "1.5rem" }}></i>
              </Button>
              {notifications > 0 && (
                <Badge text={notifications.toString()} color="red" style={styles.badge} />
              )}
              {showNotifications && (
                <div className="dropdown-menu show p-2" style={styles.notificationsMenu}>
                  {notifications === 0 ? <p>No new notifications</p> : <p>You have {notifications} notifications</p>}
                </div>
              )}
            </div>

            <div className="position-relative">
              <Avatar src="/assets/avatar.png" alt="User" size="small" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  logo: {
    width: "30px",
    height: "30px",
    marginRight: "8px",
  },
  brandText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#222",
  },
  notificationsMenu: {
    position: "absolute",
    right: 0,
    top: "100%",
    backgroundColor: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    width: "200px",
    zIndex: 10,
  },
  badge: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  noUnderline: {
    textDecoration: "none",
  },
};

export default Navbar;
