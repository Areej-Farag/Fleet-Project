import { create } from "zustand";
import axios from "axios";
import instance from "../Utilis/AxiosInterceptor";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api/users";

const useUserStore = create((set) => ({
  users: [],
  user: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    if (!email || !password) {
      set({ error: "Email and password are required", loading: false });
      return;
    }
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem("token", response.data.token);
      set({ user: response.data, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },

  register: async (email, password) => {
    if (!email || !password) {
      set({ error: "Email and password are required", loading: false });
      return;
    }
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/register`, { email, password });
      localStorage.setItem("token", response.data.token); // If token is returned
      set({ user: response.data, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  getAll: async () => {
    set({ loading: true, error: null });
    try {
      const response = await instance.get(API_URL); // Use instance
      set({ users: response.data, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  getOneById: async (id) => {
    if (!id) {
      set({ error: "User ID is required", loading: false });
      return;
    }
    set({ loading: true, error: null });
    try {
      const response = await instance.get(`${API_URL}/${id}`);
      set({ user: response.data, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  postUser: async (user) => {
    if (!user?.email) {
      set({ error: "User email is required", loading: false });
      return;
    }
    set({ loading: true, error: null });
    try {
      const response = await instance.post(API_URL, user);
      await useUserStore.getState().getAll(); // Refresh users
      set({ loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  updateUser: async (id, user) => {
    if (!id || !user) {
      set({ error: "User ID and data are required", loading: false });
      return;
    }
    set({ loading: true, error: null });
    try {
      const response = await instance.put(`${API_URL}/${id}`, user);
      set((state) => ({
        users: state.users.map((u) => (u._id === id ? response.data : u)),
        user: response.data,
        loading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },

  deleteUser: async (id) => {
    if (!id) {
      set({ error: "User ID is required", loading: false });
      return;
    }
    set({ loading: true, error: null });
    try {
      await instance.delete(`${API_URL}/${id}`);
      set((state) => ({
        users: state.users.filter((user) => user._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        loading: false,
      });
    }
  },
}));

export default useUserStore;