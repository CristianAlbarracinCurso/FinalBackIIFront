import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-semibold hover:text-blue-400">
          Mi Aplicación
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="text-white hover:text-blue-400">
            Iniciar sesión
          </Link>
          <Link to="/profile" className="text-white hover:text-blue-400">
            Profile
          </Link>
          <Link to="/register" className="text-white hover:text-blue-400">
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
