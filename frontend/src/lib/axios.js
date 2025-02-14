import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "https://e-commerce-backend-9ghd.onrender.com" : "/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
