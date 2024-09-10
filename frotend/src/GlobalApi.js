import axios from "axios";

const BASE_URL = "https://render-learningneeds.onrender.com/api";

const API_KEY =
  "22fa0a7e86c4723bed77a77422b7c68e73493297c5baaa2c32a6490d5b4e4362cfeebc1e2aa18474d15e767f9578a06b02d244a5dc046f8e0a8ec9a93f054fec757987c402304ee2f4e421690ec907fae2218a0499bb922b73c5bf10fe94d3747dabdafbce5bdd832170d73b0a4ac53e6b77317f3f10de601d28a3a18b6e609e";

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
