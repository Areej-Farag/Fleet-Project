// src/Reducers/TripsStore.js
import { create } from 'zustand';
import axios from 'axios';

const useTripsStore = create((set) => ({
  trips: [],
  trip: null,
  loading: false,
  error: null,
  totalPages: 0,
  currentPage: 1,
  totalTrips: 0,

  // Fetch all trips
  fetchAllTrips: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('/api/trips');
      set({ trips: response.data, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to fetch trips', loading: false });
    }
  },

  // Fetch trip by ID
  fetchTripById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`/api/trips/${id}`);
      set({ trip: response.data, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to fetch trip', loading: false });
    }
  },

  // Create a new trip
  createTrip: async (tripData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post('/api/trips', tripData);
      set((state) => ({
        trips: [...state.trips, response.data],
        loading: false,
      }));
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to create trip', loading: false });
    }
  },

  // Update a trip
  updateTrip: async (id, tripData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`/api/trips/${id}`, tripData);
      set((state) => ({
        trips: state.trips.map((trip) => (trip._id === id ? response.data : trip)),
        trip: response.data,
        loading: false,
      }));
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to update trip', loading: false });
    }
  },

  // Delete a trip
  deleteTrip: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`/api/trips/${id}`);
      set((state) => ({
        trips: state.trips.filter((trip) => trip._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to delete trip', loading: false });
    }
  },

  // Fetch paginated trips
  fetchPaginatedTrips: async (page = 1, limit = 9) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`/api/trips/paginated?page=${page}&limit=${limit}`);
      set({
        trips: response.data.trips,
        totalPages: response.data.totalPages,
        currentPage: response.data.currentPage,
        totalTrips: response.data.totalTrips,
        loading: false,
      });
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to fetch paginated trips', loading: false });
    }
  },

  // Fetch trips by governorate (assuming governorate is like category)
  fetchTripsByGovernorate: async (governorateId, page = 1, limit = 9) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`/api/trips/category?category=${governorateId}&page=${page}&limit=${limit}`);
      set({
        trips: response.data.trips,
        totalPages: response.data.totalPages,
        currentPage: response.data.currentPage,
        totalTrips: response.data.totalTrips,
        loading: false,
      });
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to fetch trips by governorate', loading: false });
    }
  },

  // Fetch sorted trips
  fetchSortedTrips: async (sortBy, page = 1, limit = 9) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`/api/trips/sorted?sortBy=${sortBy}&page=${page}&limit=${limit}`);
      set({
        trips: response.data.trips,
        totalPages: response.data.totalPages,
        currentPage: response.data.currentPage,
        totalTrips: response.data.totalTrips,
        loading: false,
      });
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to fetch sorted trips', loading: false });
    }
  },
}));

export default useTripsStore;