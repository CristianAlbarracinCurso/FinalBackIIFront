import React, { useState } from 'react';
import API from '../../api/api.js';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => field === '')) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);
    try {
      const response = await API.post('/register', formData);
      alert(response.data.message);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        password: '',
      });
    } catch (error) {
      alert('Error al registrar: ' + error.response?.data?.message || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Registro</h2>

      <InputField
        label="Nombre"
        id="first_name"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <InputField
        label="Apellido"
        id="last_name"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <InputField
        label="Correo Electrónico"
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Edad"
        id="age"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
      />
      <InputField
        label="Contraseña"
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Procesando...' : 'Registrarse'}
      </button>
    </form>
  );
};

const InputField = ({ label, id, name, type = "text", value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-600">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      required
    />
  </div>
);

export default RegisterForm;
