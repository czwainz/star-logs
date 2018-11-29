import AuthService from "./components/auth/auth-service.js";
import AuthController from "./components/auth/auth-controller.js";
import LogController from "./components/logs/log-controller.js"


let auth = new AuthService()

class App {
  constructor() {
    this.controllers = {
      authController: new AuthController(auth),
      logController: new LogController(auth)
    }
  }
}

// @ts-ignore
window.app = new App()