import axios from "axios";

const BASE_URL = "https://learningneeds-strapi-1-r94y.onrender.com/api";
// https://learningneeds-strapi-1-r94y.onrender.com/

const API_KEY =
  "f352e0ac0dbda52e278e1cf1f0282f8779d42288b7412a8ee7819d61495b8020f54830329c0d81ef8fe82c21cecc9ed35d962a59ea6b8e194e42954d3cd9bd56523da3415f41c483f30b13aac9e04254d670409a7a51a8d774c5944bef827d60bd4ca0c0064f8d17294d61f3bca98e5b5c4289cb747bdd5173abf699aafa3fe6";

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
