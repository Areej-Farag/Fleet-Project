import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";

import Avatar from "../Atoms/Avatar";
import Button from "../Atoms/Button";
import Badge from "../Atoms/Badge";
import logo from "../../assets/Images/logo.png";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const bellRef = useRef(null);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        bellRef.current &&
        !bellRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-container border-bottom bg-white">
      <div className="container d-flex justify-content-between align-items-center py-2">
        {/* Logo & Travelers */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="navbar-logo d-flex align-items-center gap-2 text-decoration-none">
            <img src={logo} alt="Fleet Logo" height={32} />
            <span className="brand-text fw-semibold text-dark fs-5">fleet</span>
          </Link>

          {/* Travelers Dropdown */}
          <div className="d-none d-md-block">
            <Button color="trans">
              Travelers <span className="ms-1">▾</span>
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          {/* Support */}
          <div className="d-none d-md-block">
            <Link to="/support" className="text-decoration-none text-dark">Support</Link>
          </div>

          {/* Language */}
          <div className="d-none d-md-flex align-items-center gap-1">
            <MdLanguage className="text-primary fs-5" />
            <Link to="/language" className="text-decoration-none text-dark">Language</Link>
          </div>

         {/* List Your Property */}
<Link to="/list-your-property" className="d-none d-md-block text-decoration-none">
  <Button color="white">List your property</Button>
</Link>


        {/* Notification + Badge */}
<div className="position-relative" ref={bellRef}>
  <Button
    color="trans"
    shape="small-circle"
    onClick={() => setShowNotifications(!showNotifications)}
  >
    <FaBell size={18} color="#666" />
  </Button>

  {notifications > 0 && (
    <Badge text={notifications.toString()} color="red" />
  )}

  {/* Notification Dropdown */}
  {showNotifications && (
    <div
      className="notification-dropdown position-absolute bg-white shadow-sm p-2 rounded"
      style={{ top: "100%", right: 0, minWidth: 200 }}
      ref={dropdownRef}
    >
      {notifications === 0 ? (
        <div className="text-muted text-center py-2">No notifications</div>
      ) : (
        <ul className="list-unstyled mb-0">
          <li className="py-1 px-2">🔔 You have new booking</li>
          <li className="py-1 px-2">📩 Message from admin</li>
        </ul>
      )}
    </div>
  )}
</div>


          {/* Avatar */}
          <Avatar src="/assets/Images/avatar.png" alt="User" size="small" />
          {/* Mobile Menu */}
          <div className="d-md-none" onClick={toggleMobileMenu}>
            <FaBars size={22} color="#333" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
  <>
    <div className="drawer-overlay" onClick={toggleMobileMenu}></div>
    <div className="drawer bg-white shadow-sm">
      <div className="drawer__header d-flex justify-content-between align-items-center mb-3">
        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
          <img src={logo} alt="Fleet Logo" height={28} />
          <span className="fw-semibold text-dark">fleet</span>
        </Link>
        <span className="fs-4" onClick={toggleMobileMenu} role="button">&times;</span>
      </div>

      <nav className="drawer__links d-flex flex-column">
        <Link to="/" onClick={toggleMobileMenu} className="drawer-link">Travelers</Link>
        <Link to="/flights" onClick={toggleMobileMenu} className="drawer-link">Flights</Link>
        <Link to="/car-rental" onClick={toggleMobileMenu} className="drawer-link">Car rental</Link>
        <Link to="/things-to-do" onClick={toggleMobileMenu} className="drawer-link">Thing to do</Link>
        <Link to="/support" onClick={toggleMobileMenu} className="drawer-link">Support</Link>
      </nav>

      {/* List your property - Styled Link in Circle */}
      <div className="mt-4 text-center">
        <Link
          to="/list-your-property"
          onClick={toggleMobileMenu}
          className="drawer-link circle-link"
        >
          List your property
        </Link>
      </div>
    </div>
  </>
)}


    </nav>
  );
};

export default Navbar;
