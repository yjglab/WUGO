import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WUGO by YJGLAB";
  res.locals.routes = routes; // routes 변수, routes.js 파일
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  }; //fake.
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
