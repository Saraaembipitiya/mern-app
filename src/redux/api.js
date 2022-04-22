import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4500" });

export const signIn = (formData) => API.post("/user/login", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const googleSignIn = (formData) =>
  API.post("user/googleSignIn", formData);
