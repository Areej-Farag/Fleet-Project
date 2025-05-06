// store/authStore.js
import { create } from "zustand";
 const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),

  login: ({ user, token }) => {
    localStorage.setItem("token", token);
    set({ user, token, isAuthenticated: true });
  },
  loginWithGoogle: async (googleToken) => {
    const response = await fetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: googleToken }),
    });
    const data = await response.json();
    if (response.ok) {
      set({ user: data.user, token: data.token });
      localStorage.setItem("token", data.token);
    } else {
      throw new Error(data.message);
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
