import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["time"]

  connect() {
    this.refreshClock()
    setInterval(() => {
      this.refreshClock()
    }, 1000)
  }

  refreshClock() {
    fetch("/clock/current_time")
      .then(response => response.json())
      .then(data => {
        this.timeTarget.innerText = data.time
      })
  }
}
