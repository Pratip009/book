import axios from "axios";

const BASE_URL = "https://learningneeds-strapi-1.onrender.com/api";
// https://learningneeds-strapi-1.onrender.com

const API_KEY =
  "5a5d245cc43dc811d07179576a70f3159203e4770de859246ab7d2abff66e0ea3e0e2ac7bf9f2fcef9453b18e2fefd55b5b39f5ae5185f1a5ed2e5a92ce04e0358c5db78b7ed19d8445d74f5c2eec0dcadcc991e6615eb9fc4b16c1cc1c88f5741791562b6a3d9d62d1e9da4895a8c6bc3ba96d0fa81f16a3184e2e94b057282";
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
