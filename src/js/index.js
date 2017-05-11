import { isTouchDevice } from './featureDetection'
import graphCanvas from './graphCanvas'
import schedule from './schedule'
import now from './now'

const init = () => {
	if (isTouchDevice()) {
		document.body.classList.add('touch')
	}

	now()

	graphCanvas(
		document.querySelector('header'),
		document.querySelector('#backgroundCanvas')
	)

	schedule(
		document.querySelector('#scheduleContainer')
	)
}

window.addEventListener('load', init)