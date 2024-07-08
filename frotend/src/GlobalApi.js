import axios from "axios";

const BASE_URL = "https://learningneeds-strapi-1.onrender.com/api";
// https://learningneeds-strapi-1.onrender.com

const API_KEY =
  "a0700f66afb6488891e7e4dc3f26e505c21bd7b25a43083832be281a56ee0b070db4f8911518ffaef3bfd75d6c4799f5c920a7cb3f41c8ba1fb0e1a044a1fc5091c8bb3151722721a0d0fde06c6bdee823bd849a88052c063e59fe15014092fe2b47c638a449c1701377d694cabdda45619d24c89e34797504a03682a7464056";
// "e83da51f44bc526b93a696a79222831b68ee28db55a96175fdccc2297d35cfbf71e7a8e81515ebeb25c482b1af2292fdc07eced6a35bb8b84cea2b099e30845deb5c3e8e256b4c977b9ea2d4f79b8bb43039dd44ee9045e301817eddb27f9c551eb99960433335a4dd8f2282893541ac90d759b6aa64746d9d781cfff8c76c5d";

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
