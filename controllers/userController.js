export const join = (req, res) => res.send("join", { pageTitle: "Join" });
export const login = (req, res) => res.send("Login", { pageTitle: "Login" });
export const logout = (req, res) => res.send("Logout", { pageTitle: "Logout" });
export const users = (req, res) => res.send("Users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.send("User Detail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.send("Edit Profile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.send("Change Password", { pageTitle: "Change Paasword" });
