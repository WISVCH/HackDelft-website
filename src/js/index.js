import { isTouchDevice } from './featureDetection'
import graphCanvas from './graphCanvas'
import schedule from './schedule'
import now from './now'

const init = () => {
	if (isTouchDevice()) {
		document.body.classList.add('touch')
	}

	now()

	const header = document.querySelector('header')
	const canvas = document.querySelector('#backgroundCanvas')
	const scheduleContainer = document.querySelector('#scheduleContainer')

	if (header && canvas) {
		graphCanvas(header, canvas)
	}

	if (scheduleContainer) {
		schedule(scheduleContainer)
	}
}

window.addEventListener('load', init)