import axios from "axios";

const BASE_URL = "https://learningneeds-strapi-1.onrender.com/api";
// https://learningneeds-strapi-1.onrender.com

const API_KEY =
  "78d8fbd0571df9b38f7bb16c3b12b8718dc1420a37eada7c4a1cec6a22561ce0fef54827f480ae628d202a663047a87070332d87caabf163996e099eaff16696218e0578c5661cb9e83d21532500a278b9cc42f4e7652f649d29ebcda469367ba5fb16f9903973bd81b4fcc0920b7dcfda5f3540ec96f5f06a0579d462f6d01a";


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
