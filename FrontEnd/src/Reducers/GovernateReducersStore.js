import { create } from 'zustand';
import axios from 'axios';

// Corrected base URL for your local API
const API_URL = 'http://localhost:4000/api/governorates';


// Zustand store for governorates
const useGovernateStore = create((set) => ({
  // State
  governorates: [], // Ensure initialized as an array
  selectedGovernorate: null,
  trips: [],
  loading: false,
  error: null,

  // Actions
  // Fetch all governorates
  getAll: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(API_URL);
      console.log('API Response:', response.data); // Debug the response
      // Ensure response.data is an array
      const data = Array.isArray(response.data) ? response.data : [];
      set({ governorates: data, loading: false });
    } catch (error) {
      console.error('Error fetching governorates:', error); // Debug the error
      set({ error: error.message, loading: false, governorates: [] });
    }
  },

  // Fetch a single governorate by ID
  getOneById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      set({ selectedGovernorate: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Create a new governorate
  postGovernate: async (governorateData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(API_URL, governorateData);
      set((state) => ({
        governorates: [...state.governorates, response.data],
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Update a governorate
  updateGovernate: async (id, governorateData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`${API_URL}/${id}`, governorateData);
      set((state) => ({
        governorates: state.governorates.map((gov) =>
          gov._id === id ? response.data : gov
        ),
        selectedGovernorate: response.data,
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Delete a governorate
  deleteGovernate: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${API_URL}/${id}`);
      set((state) => ({
        governorates: state.governorates.filter((gov) => gov._id !== id),
        selectedGovernorate: null,
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Fetch all trips for a governorate by its ID
  getTripsByGovernateId: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/${id}/trips`);
      set({ trips: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useGovernateStore;