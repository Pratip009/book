import axios from "axios";

const BASE_URL = "https://learningneeds-strapi-3ylt.onrender.com/api";
// https://learningneeds-strapi-3ylt.onrender.com/

const API_KEY =
  "78087e4cc1ed860b9c370df71538479f0261fb207a280bd8465165ebf7d60e1fec8ec9d0527f6fda6e1313fb3ff0489c1205ffca4783b4aa4d9975c1dc9b818b408a2cc7f5f0a2a68503e2e98d5721c885247beada154aa2eb89762e90e2689bfb43ffed80822bdb14675065f01d767dfd3a4e0485ff4489e2ce7cafbf6ee023";

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
export const getNotice = () => axiosInstance.get("/noticeboards");
export const getPdfs = () => axiosInstance.get("/pdfs?populate=*");
