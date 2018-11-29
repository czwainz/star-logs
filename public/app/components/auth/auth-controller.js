let _authService = {}

function drawUserLogin() {
  console.log("Not Currently Logged In")
  document.getElementById('auth').innerHTML = `
    <form onsubmit="app.controllers.authController.login(event)">
      <input type="email" name="email" placeholder="Enter Email" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    `
}

function drawLogout() {
  console.log('You Are Logged In')
  document.getElementById('auth').innerHTML = `<button onclick="app.controllers.authController.logout()">Log Out</button>`
}

export default class AuthController {
  constructor(auth) {
    _authService = auth
    _authService.authenticate(drawLogout, drawUserLogin)
  }

  login(event) {
    event.preventDefault();
    let creds = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    _authService.login(creds, drawLogout)
  }

  logout() {
    _authService.logout(drawUserLogin)
  }

  showLogin() {
    drawUserLogin()
  }
}