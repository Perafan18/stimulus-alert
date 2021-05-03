import { Application } from 'stimulus'
import AlertController from '../src'

describe('AlertController', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="alert"
          data-alert-time-value="10000"
          data-alert-hidden-class-value="hidden">
        <span data-action="click->alert#close">&times;</span>
        Hello, Stimulus!
      </div>
    `
    const application = Application.start()
    application.register('alert', AlertController)
  })

  describe('close', () => {
    it('close alert clicking on the span', () => {
      const alert = document.querySelector('[data-controller="alert"]')
      const close = document.querySelector('[data-action="click->alert#close"]')

      expect(alert.classList.value).toBe('')

      close.click()

      expect(alert.classList.value).toBe('hidden')
    })
  })

  describe('timer', () => {
    it('close alert after 10 seconds', () => {
      const alert = document.querySelector('[data-controller="alert"]')

      expect(alert.classList.value).toBe('')

      jest.advanceTimersByTime(10000)

      expect(alert.classList.value).toBe('hidden')
    })
  })
})
