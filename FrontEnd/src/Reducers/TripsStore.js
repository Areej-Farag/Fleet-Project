import { create } from 'zustand';
import axios from 'axios';

// Base URL for the trips API
const API_URL = 'http://localhost:4000/api/trips';

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
      const response = await axios.get(API_URL);
      console.log('API Response (fetchAllTrips):', response.data); // Debug
      set({ trips: response.data, loading: false });
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to fetch trips';
      console.error('Error fetching all trips:', error);
      set({ error: errorMessage, loading: false });
    }
  },

  // Fetch trip by ID
  fetchTripById: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      console.log('API Response (fetchTripById):', response.data); // Debug
      set({ trip: response.data, loading: false });
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to fetch trip';
      console.error('Error fetching trip:', error);
      set({ error: errorMessage, loading: false });
    }
  },

  // Create a new trip
  createTrip: async (tripData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(API_URL, tripData);
      console.log('API Response (createTrip):', response.data); // Debug
      set((state) => ({
        trips: [...state.trips, response.data],
        loading: false,
      }));
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to create trip';
      console.error('Error creating trip:', error);
      set({ error: errorMessage, loading: false });
    }
  },

  // Update a trip
  updateTrip: async (id, tripData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`${API_URL}/${id}`, tripData);
      console.log('API Response (updateTrip):', response.data); // Debug
      set((state) => ({
        trips: state.trips.map((trip) => (trip._id === id ? response.data : trip)),
        trip: response.data,
        loading: false,
      }));
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to update trip';
      console.error('Error updating trip:', error);
      set({ error: errorMessage, loading: false });
    }
  },

  // Delete a trip
  deleteTrip: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${API_URL}/${id}`);
      console.log('Trip deleted:', id); // Debug
      set((state) => ({
        trips: state.trips.filter((trip) => trip._id !== id),
        loading: false,
      }));
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to delete trip';
      console.error('Error deleting trip:', error);
      set({ error: errorMessage, loading: false });
    }
  },

  // Fetch paginated trips
  // fetchPaginatedTrips: async (page = 1, limit = 9) => {
  //   set({ loading: true, error: null });
  //   try {
  //     const response = await axios.get(`${API_URL}/paginated?page=${page}&limit=${limit}`);
  //     console.log('API Response (fetchPaginatedTrips):', response.data); // Debug
  //     set({
  //       trips: response.data.trips,
  //       totalPages: response.data.totalPages,
  //       currentPage: response.data.currentPage,
  //       totalTrips: response.data.totalTrips,
  //       loading: false,
  //     });
  //   } catch (error) {
  //     const errorMessage = error.response?.data?.error || 'Failed to fetch paginated trips';
  //     console.error('Error fetching paginated trips:', error);
  //     set({ error: errorMessage, loading: false });
  //   }
  // },

  // Fetch trips by governorate
  fetchTripsByGovernorate: async (governorateId, page = 1, limit = 9) => {
    set({ loading: true, error: null });
    try {
      // Adjust endpoint based on your backend; assuming /api/governorates/:id/trips
      const response = await axios.get(`http://localhost:4000/api/governorates/${governorateId}/trips?page=${page}&limit=${limit}`);
      console.log('API Response (fetchTripsByGovernorate):', response.data); // Debug
      set({
        trips: response.data.trips || response.data,
        totalPages: response.data.totalPages || 1,
        currentPage: response.data.currentPage || page,
        totalTrips: response.data.totalTrips || response.data.length,
        loading: false,
      });
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to fetch trips by governorate';
      console.error('Error fetching trips by governorate:', error);
      set({ error: errorMessage, loading: false });
    }
  },

  // Fetch sorted trips
  fetchSortedTrips: async (sortBy, page = 1, limit = 9) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/sorted?sortBy=${sortBy}&page=${page}&limit=${limit}`);
      console.log('API Response (fetchSortedTrips):', response.data); // Debug
      set({
        trips: response.data.trips,
        totalPages: response.data.totalPages,
        currentPage: response.data.currentPage,
        totalTrips: response.data.totalTrips,
        loading: false,
      });
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to fetch sorted trips';
      console.error('Error fetching sorted trips:', error);
      set({ error: errorMessage, loading: false });
    }
  },
}));

export default useTripsStore;