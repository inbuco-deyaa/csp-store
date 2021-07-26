import { Router } from "express";

export class NotificationRoutes {
  router: Router;


  constructor() {
    this.router = Router();
    this.routes();
  }
  routes() { }
}
