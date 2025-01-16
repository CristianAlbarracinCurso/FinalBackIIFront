import React, { useEffect, useState } from "react";
import axios from "axios"; // Reemplaza API por axios directamente si no tienes una configuración personalizada.

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Realizar la solicitud al endpoint `/current`
        const response = await axios.get("/api/current", {
          withCredentials: true, // Asegura que las cookies se envíen si usas JWT en cookies.
        });
        setUser(response.data.user); // Guarda los datos del usuario.
        setError(null); // Limpia los errores.
      } catch (error) {
        // Manejo del error según el estado de la respuesta.
        if (error.response && error.response.status === 401) {
          setError("No autenticado. Por favor, inicia sesión.");
        } else {
          setError("Error al cargar los datos del usuario.");
        }
      } finally {
        setLoading(false); // Finaliza la carga.
      }
    };

    fetchUser(); // Llamada inicial.
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-700">Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
        Perfil de Usuario
      </h2>
      <div className="text-gray-600">
        <p className="mb-2">
          <span className="font-semibold">Nombre:</span>{" "}
          {user?.first_name} {user?.last_name}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Correo:</span> {user?.email}
        </p>
        <p>
          <span className="font-semibold">Edad:</span> {user?.age || "No disponible"}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
