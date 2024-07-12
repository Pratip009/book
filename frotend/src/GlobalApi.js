import axios from "axios";

const BASE_URL = "https://learningneeds-strapi-1.onrender.com/api";
// https://learningneeds-strapi-1.onrender.com

const API_KEY =
  "5413171120888df8e12de6e7875a149800cbffb9112e6bbfb544af5f4deb1e97ae8856761ef3aa94231fb108238b10169c97d53331cc866c384880d9a490ce3c38c3a0d233aefdf921bae0e28391c98b8a37b5e6a35068bdd10dd385e4d91aea856c024faa87a051a6f01a2e67c3ed7b334422848a5ff51949961dcd1a364214";


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
