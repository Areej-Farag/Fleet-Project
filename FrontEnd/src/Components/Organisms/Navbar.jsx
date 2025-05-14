import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { MdLanguage, MdSunny } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { Link } from "react-router-dom";
import ava from "../../assets/Images/avatar.png";
import Avatar from "../Atoms/Avatar";
import Button from "../Atoms/Button";
import Badge from "../Atoms/Badge";
import logo from "../../assets/Images/logo.png";
import UserButtonList from "../Molecules/UserButtonList";
import "../Styles/Navbar.css";
import { useAuthModal } from "../../Context/AuthModalContext";
import useDarkMode from "../../Hooks/useDarkMood";
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const bellRef = useRef(null);
  const dropdownRef = useRef(null);
  const [language, setLanguage] = useState("EN");
  const [toggleLang, setToggleLang] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const { switchAuthType, openModal } = useAuthModal();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleSwitchToSignIn = () => {
    openModal();
    switchAuthType("signin");
  };

  const ShowProfile = () => {
    setToggleProfile(!toggleProfile);
  };

  const languageClick = () => {
    setToggleLang(!toggleLang);
  };

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
    <nav className="navbar-container border-bottom ">
      <div className="container d-flex justify-content-between align-items-center py-2">
        {/* Logo & Travelers */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="navbar-logo d-flex align-items-center gap-2 text-decoration-none">
            <img src={logo} alt="Fleet Logo" height={32} />
            <span className="brand-text fw-semibold  fs-5">fleet</span>
          </Link>

          {/* Travelers Dropdown */}
          <div className="d-none d-md-flex travelerContainer ">
            <Button color="trans">
              <span>Travelers</span> <span className="ms-1">▾</span>
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          <button className="lightMode" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <MdSunny /> : <LuSunMoon />}
          </button>

          {/* Language (Visible only on desktop) */}
          <div className="d-none d-md-flex align-items-center gap-1">
            <MdLanguage className="text-primary fs-5" />
            <div className="languageContainer">
              <Button color="trans" size="default" shape="default" onClick={languageClick}>
                <span>Language</span>
              </Button>
              <div className="languageDropdown" style={{ opacity: toggleLang ? "1" : "0" }}>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Button color="trans" size="default" shape="default" onClick={() => setLanguage("EN")}>
                      English
                    </Button>
                  </li>
                  <li>
                    <Button color="trans" size="default" shape="default" onClick={() => setLanguage("AR")}>
                      Arabic
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Notification + Badge */}
          <div className="position-relative" ref={bellRef}>
            <Button color="trans" size="default" shape="small-circle" onClick={() => setShowNotifications(!showNotifications)}>
              <FaBell size={18} color="#666" />
            </Button>

            {notifications > 0 && <Badge text={notifications.toString()} color="red" />}

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
          <div className="Avatar-holder">
            {isAuthenticated ? (
              <>
                <button className="Avatar-button" onClick={ShowProfile}>
                  <Avatar src={ava} alt="User" size="small" />
                </button>
                <div
                  className="profileDropdown"
                  style={{
                    opacity: toggleProfile ? "1" : "0",
                    visibility: toggleProfile ? "visible" : "hidden",
                  }}
                >
                  <UserButtonList />
                </div>
              </>
            ) : (
              <Button color="blue" size="small" shape="default" onClick={handleSwitchToSignIn}>
                Sign In
              </Button>
            )}
          </div>

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
          <div className="drawer shadow-sm">
            <div className="drawer__header d-flex justify-content-between align-items-center mb-3">
              <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
                <img src={logo} alt="Fleet Logo" height={28} />
                <span className="fw-semibold ">fleet</span>
              </Link>
              <span className="fs-4" onClick={toggleMobileMenu} role="button">
                &times;
              </span>
            </div>

            <nav className="drawer__links d-flex flex-column">
              <Link to="/" onClick={toggleMobileMenu} className="drawer-link">
                Travelers
              </Link>
              <Link to="/flights" onClick={toggleMobileMenu} className="drawer-link">
                Flights
              </Link>
              <Link to="/car-rental" onClick={toggleMobileMenu} className="drawer-link">
                Car rental
              </Link>
              <Link to="/things-to-do" onClick={toggleMobileMenu} className="drawer-link">
                Thing to do
              </Link>
              <Link to="/support" onClick={toggleMobileMenu} className="drawer-link">
                Support
              </Link>
            </nav>

            {/* Language Dropdown in Drawer */}
            <div className="mt-4 px-3">
              <div className="d-flex align-items-center gap-1">
              <MdLanguage className="text-primary fs-5 d-none d-md-block" />
              <div className="languageContainer w-100">
                  <Button color="trans" size="default" shape="default" onClick={languageClick} className="w-100 text-start">
                    <span>Language</span>
                  </Button>
                  {toggleLang && (
                    <div className="languageDropdown mt-2">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <Button color="trans" size="default" shape="default" onClick={() => setLanguage("EN")} className="w-100 text-start">
                            English
                          </Button>
                        </li>
                        <li>
                          <Button color="trans" size="default" shape="default" onClick={() => setLanguage("AR")} className="w-100 text-start">
                            Arabic
                          </Button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* List your property */}
            <div className="mt-4 text-center">
              <Link to="/list-your-property" onClick={toggleMobileMenu} className="drawer-link circle-link">
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