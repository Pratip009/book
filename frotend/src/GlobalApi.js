import axios from "axios";

const BASE_URL = "https://learningneeds-strapi-1-r94y.onrender.com/api";
// https://learningneeds-strapi-1-r94y.onrender.com/

const API_KEY =
  "9692b3ff2af9e88b7d67eabda88c5dc34e4a30afb8df3bcef673e232ce271fc3d4d8a6a198f7b4c45d9a54361a831bdff824c8efb4a847ff3555a5f6881eaaedee7b47a169fb7e0302022a159214a08a86592486ef5b954bdadadda69aa86df25ac89af8957809233970af1993819c95a909f9e76c2532a981edd4b54ec04177";

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
