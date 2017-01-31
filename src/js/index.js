import { isTouchDevice } from './featureDetection'
import graphCanvas from './graphCanvas'
import schedule from './schedule'

if (isTouchDevice()) {
	document.body.classList.add('touch')
}

graphCanvas(
	document.querySelector('header'),
	document.querySelector('#backgroundCanvas')
)

schedule(
	document.querySelector('#scheduleContainer')
)