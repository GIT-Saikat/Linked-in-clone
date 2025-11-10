import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h2>LinkedIn Clone</h2>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">
            <FaHome className="navbar-icon" />
            <span>Home</span>
          </Link>
          
          <Link to={`/profile/${user?.id}`} className="navbar-item">
            <FaUser className="navbar-icon" />
            <span>Profile</span>
          </Link>
        </div>

        <div className="navbar-user">
          <span className="user-name">{user?.name}</span>
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt className="navbar-icon" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

