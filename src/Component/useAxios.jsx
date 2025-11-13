import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://eco-track-one-flame.vercel.app",
  
});
const useAxios = () => {
  return axiosInstance;
};
export default useAxios;
