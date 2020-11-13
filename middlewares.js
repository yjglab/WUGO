import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "prtube";
  res.locals.routes = routes;
  next();
};
