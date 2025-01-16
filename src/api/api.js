import axios from "axios";

// Base URL para todas las peticiones
const API = axios.create({
  baseURL: "http://localhost:3002/", // Cambia el puerto si tu backend usa otro
  withCredentials: true, // Permite enviar cookies
});

export default API;
