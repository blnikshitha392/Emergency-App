import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

// Blood Banks
export const getBloodBanks = async () => {
  const response = await api.get("/users");
  return response.data;
};

// Hospitals
export const getHospitals = async () => {
  const response = await api.get("/posts");
  return response.data;
};

// Emergency Contacts
export const getContacts = async () => {
  const response = await api.get("/comments");
  return response.data;
};

// Login
export const loginUser = async (userData) => {
  return Promise.resolve({
    success: true,
    user: userData
  });
};

export default api;