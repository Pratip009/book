import axios from "axios";

const BASE_URL = "https://learningneeds-strapi-11ta.onrender.com/api";

const API_KEY =
  "b8e5b30d1eca15948b88c28960187777addd48710ac1c3455bcac28e4e1446952dd3d2ef13549afe7799ab173b1e4f217f0f6e76e81f199b2b7a95f0e91489f6cf50eafbb8a1a4874a9318c32f6ac7981ee1ab9e3385737b9459a19466329471b27551eedceaaf3799ed699098c1d0724907def5278c483112d083b4d144e594";

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
