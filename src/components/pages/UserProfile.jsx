import React, { useEffect, useState } from "react";
import API from "../../api/api";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.get("/current");
        setUser(response.data.user);
        setError(null);
      } catch (error) {
        setError("No autenticado. Por favor, inicia sesión.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
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
          <span className="font-semibold">Nombre:</span> {user.first_name}{" "}
          {user.last_name}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Correo:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Edad:</span> {user.age}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
