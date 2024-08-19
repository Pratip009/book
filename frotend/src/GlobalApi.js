import axios from "axios";

const BASE_URL = "https://heroku-learningneeds-strapi.onrender.com/api";

const API_KEY =
  "527b350af5c9db6a697d08ba90bca7a4d602b40f1a5ef5cb1b61bee9912e5d13c1350307c2b77bac04dfb020407f9d9cc5ec33c1d7f84f3f87910f68e23bd084ed39b1ce8144ca41406c1c2ab0cbb89122022de6f16def607d92914f29e2023db91d60eddcdf9c5e8dd8b8538fe9882f222541f5732e43f5287d2d05286a55f3";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + API_KEY,
  },
});

export const getBlogs = () => axiosInstance.get("/blogs?populate=*");
export const getGallery = () => axiosInstance.get("/galleries?populate=*");
export const getBanner = () => axiosInstance.get("/banners?populate=*");
export const getPhoneEmail = () => axiosInstance.get("/phoneand-emails");
export const getTeam = () => axiosInstance.get("/teams?populate=*");
export const getTestimonal = () =>
  axiosInstance.get("/testimonials?populate=*");
export const getNotice = () => axiosInstance.get("/noticeboards")
export const getPdfs = () => axiosInstance.get("/pdfs?populate=*")
