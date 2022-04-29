import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4500" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/user/login", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const googleSignIn = (formData) =>
  API.post("user/googleSignIn", formData);

export const createTour = (tourData) => API.post("/tour", tourData);
export const getTours = () => API.get("/tour");
export const getTour = (id) => API.get(`/tour/${id}`);
export const deleteTour = (id) => API.delete(`/tour/${id}`);
export const updateTour = ({ updatedTourData, id }) =>
  API.patch(`/tour/${id}`, updatedTourData);
export const getToursByUser = () => API.post(`/tour/userTours`);
