import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "config/firebase";
// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/logo.svg";
import { AuthContext } from "./../context/AuthContext";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

  console.log(isAuthenticated);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition">
          {!isAuthenticated ? (
            <Link className="hover:text-violet-900 transition" to="/auth/login">
              Login
            </Link>
          ) : (
            <button onClick={handleLogout}>LogOut</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
