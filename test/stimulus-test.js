import { Application } from 'stimulus'
import pretty from 'pretty'

export default class {
    static #nextFrame() {
        return new Promise(resolve => window.requestAnimationFrame(resolve))
    }

    static #findControllerName(html) {
        const matches = html.match(/data-controller="(.*)"/)

        if (matches) {
            return matches[1]
        }

        throw new Error('Couldn\'t find data-controller attribute')
    }

    static stimulusFixture(html, controllerClass) {
        const name = this.#findControllerName(html)

        document.body.outerHTML = html;
        const application = Application.start(document.body)
        application.register(name, controllerClass)

        return this.#nextFrame()
    }

    static documentHtml = () => pretty(document.body.innerHTML)
}

