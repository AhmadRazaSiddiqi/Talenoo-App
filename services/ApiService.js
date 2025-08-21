import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

class ApiService {
  constructor(baseURL = 'https://api.eversols.com/api/') {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    });

    this.api.interceptors.request.use(async (config) => {
      try {
        // const token = await AsyncStorage.getItem('authToken');
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU1MTAzNzEzLCJleHAiOjE3NTUxOTAxMTN9.fhaH1bJnqj79X2fc7rlnWoH83vYArxl0J5Dk1DFnIro"
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      } catch (error) {
        console.error('Failed to retrieve token:', error);
        return config; // Still return config even if token retrieval fails
      }
    });
    this.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.error('API Error:', error);
        if (error.response?.status === 401) {
          await this.clearAuthToken();
          // Trigger navigation to login using React Navigation
          // navigationRef.current?.navigate('Login'); <-- example
        }
        return Promise.reject(error);
      }
    );
  }

 // In ApiService.js
async setAuthToken(token) {
  try {
    await AsyncStorage.setItem('authToken', token);
    console.log('Token stored successfully');
  } catch (error) {
    console.error('Failed to store token:', error);
    throw error;
  }
}

async getAuthToken() {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch (error) {
    console.error('Failed to retrieve token:', error);
    return null;
  }
}
  async clearAuthToken() {
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('role');
  }

  async get(endpoint, params = {}) {
    return this.api.get(endpoint, { params }).then(res => res.data);
  }

  async post(endpoint, data) {
    return this.api.post(endpoint, data).then(res => res.data);
  }

  async put(endpoint, data) {
    return this.api.put(endpoint, data).then(res => res.data);
  }

  async delete(endpoint) {
    return this.api.delete(endpoint).then(res => res.data);
  }

  async login(credentials) {
    const data = await this.post('/login', credentials);
    if (data.token) {
      await this.setAuthToken(data.token);
    }
    return data;
  }

  async logout() {
    await this.post('/logout');
    await this.clearAuthToken();
  }

  getCurrentUser() {
    return this.get('/user');
  }
}

export default new ApiService();
