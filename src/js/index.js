import graphCanvas from './graphCanvas'
import { isTouchDevice } from './featureDetection'

if (isTouchDevice()) {
	document.body.classList.add('touch')
}

graphCanvas(
	document.querySelector('.header-wrapper'),
	document.querySelector('#backgroundCanvas')
)