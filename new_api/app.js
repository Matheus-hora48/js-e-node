import express from "express";
import homeRoutes from './src/routes/homeRoutes'

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.App(express.json());
  }

  routes() {}
}

export default new App().app;
