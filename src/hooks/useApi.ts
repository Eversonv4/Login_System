import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return { user: { id: 2, name: "Everson", email: "eversonv4@email.com" } };
    const response = await api.post("/validate", { token });
    return response.data;
  },
  signIn: async (email: string, password: string) => {
    return {
      user: { id: 2, name: "Everson", email: "eversonv4@email.com" },
      token: "My_Fucking_Token",
    };
    const response = await api.post("/signin", { email, password });
    return response.data;
  },
  signOut: async () => {
    return { status: true };
    const response = await api.post("/logout");
    return response.data;
  },
});
