import { NotificationRoutes } from "./notification.route";
// setup express routes and middlewares
export = (app) => {
  app.get("/", (req, res) => {
    res.send(
      '<div style="display: flex;justify-content: center;align-items: center;height: 100%"><img src="assets/logo.png"></div>'
    );
  });

  // Notification Route
  app.use("/v1/notification", new NotificationRoutes().router);
};
