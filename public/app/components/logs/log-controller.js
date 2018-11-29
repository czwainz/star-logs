
let _authService = {}

function drawLogForm() {
  document.getElementById('logs').innerHTML = `
  <div class="log-form">
    <form onsubmit="">
      <input type="text" name="title" placeholder="title">
      <input type="text" name="body" placeholder="body">
      <button onsubmit="">Add Log</button>
    </form>
  </div>
  `
}


export default class LogController {
  constructor(auth) {
    drawLogForm()
  }
}