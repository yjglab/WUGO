import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WUGO by YJGLAB";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  }; //fake.
  next();
};
