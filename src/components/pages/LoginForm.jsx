import React, { useState } from "react";
import API from "../../api/api.js";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/users/login", formData);
      alert(response.data.message);
    } catch (error) {
      alert(
        "Error al iniciar sesión: " + error.response?.data?.message ||
          "Error inesperado"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Iniciar Sesión
      </h2>

      {/* Correo */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleChange}
          required
        />
      </div>

      {/* Contraseña */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleChange}
          required
          minLength="6"
        />
      </div>

      {/* Botón de Enviar */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
