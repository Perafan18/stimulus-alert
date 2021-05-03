import { Controller } from 'stimulus'

class AlertController extends Controller {
  static values = {
    hiddenClass: String,
    time: Number,
  }

  initialize() {
    if (this.timeValue) {
      this.timer()
    }
  }

  close() {
    if (this.hiddenClassValue === '') {
      console.error('Set [data-alert-hidden-class-value]')
      return
    }

    this.element.classList.add(this.hiddenClassValue)
  }

  timer() {
    setTimeout(() => { this.close() }, this.timeValue)
  }
}

export default AlertController
