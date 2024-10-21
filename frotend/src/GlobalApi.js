import axios from "axios";

const BASE_URL = "https://learningneeds-strapi-11ta.onrender.com/api";

const API_KEY =
  "5cb371fa085221b823befcb137548fcd6861124f118edfff70d641605a0b2f5627fdf4c9a31fd2748947182cfc8ce8f42d5bdaa2a7443e2744cfaaa71d8bbde26fa29f44f73bc18f30b1ab3f8b10fcf87c8f9deb8f9081ece617bc95838976cf4eac20ff341eaddaea47ccc64ac0e67bc34f8678ed1f0116bbf220189b6b7881";

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
