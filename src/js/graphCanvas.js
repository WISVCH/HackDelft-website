import { isTouchDevice } from './featureDetection'

const rand = (min, max) =>
	min + (max - min) * Math.random()

const clamp = (min, max) => x =>
	Math.max(min, Math.min(x, max))

const arrClone = arr => {
    const res = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res[i] = arrClone(arr[i])
        } else {
        	res[i] = arr[i]
    	}
    }

    return res
}

let container, canvas, ctx, w, h, ratio, graphHeight, graphBottom, fadeout, oldLines, newLines, lastUpdate

const minPart = 0.1
const maxPart = 0.3
const updateDuration = 2000 //ms
const updateInterval = 4500 //ms
const lineCount = 3
const stepCount = 4

const resize = () => {
	ratio = window.devicePixelRatio || 1
	w = window.innerWidth * ratio
	h = container.offsetHeight * ratio

	canvas.width = w
	canvas.height = h
}

const scroll = () => {
	let scrolled = Math.min(window.scrollY / container.offsetHeight, 1)

	graphBottom = 1 - (1 - minPart) * scrolled
	graphHeight = minPart * scrolled + maxPart * (1 - scrolled)
}

const draw = () => {
	scroll()

	ctx.clearRect(0, 0, w, h)
	ctx.fillStyle = 'rgb(5, 0, 71)'
	ctx.fillRect(0, 0, w, h*graphBottom)

	getLines().forEach(line => {
		ctx.beginPath()
		ctx.moveTo(0, h*(graphBottom - graphHeight*line[0]))

		for (let i = 1, l = line.length - 1; i <= l; i++) {
			ctx.lineTo(i * w / l, h*(graphBottom - graphHeight*line[i]))
		}

		ctx.strokeStyle = '#fff'
		ctx.lineWidth = 2*ratio
		ctx.stroke()

		ctx.lineTo(w, h*graphBottom)
		ctx.lineTo(0, h*graphBottom)
		ctx.closePath()

		ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
		ctx.fill()
	})

	fadeout = ctx.createLinearGradient(0, h*graphBottom - 1, 0, h*(graphBottom + 0.1))
	fadeout.addColorStop(0, 'rgba(224, 223, 232, 1)')
	fadeout.addColorStop(1, 'rgba(224, 223, 232, 0)')

	ctx.fillStyle = fadeout
	ctx.fillRect(0, h*graphBottom - 1, w, h*0.1 + 1)

	requestAnimationFrame(draw)
}

const getLines = () => {
	let p = clamp(0, 1)((Date.now() - lastUpdate) / updateDuration)
	p = (1 - Math.cos(Math.PI * p)) / 2

	const lines = []

	for (let i = 0; i < oldLines.length; i++) {
		lines[i] = []
		for (let j = 0; j < oldLines[i].length; j++) {
			lines[i][j] = p * newLines[i][j] + (1 - p) * oldLines[i][j]
		}
	}

	return lines
}

const generateTrend = steps => () => {
	const points = Math.pow(2, steps)
	const res = new Array(points + 1)

	res[0]              = rand(0, 1)
	res[res.length - 1] = rand(0, 1)

	let size = points;

	while ((size = size / 2) >= 1) {
		for (let i = size; i < points; i += 2*size) {
			res[i] = (res[i - size] + res[i + size]) / 2 // Average
			res[i] += rand(-1, 1) * size / points // Add random part
			res[i] = Math.max(0, res[i])
		}
	}

	return res;
}

const generateTrends = (n, steps) =>
	new Array(n).fill(null).map(generateTrend(steps))

const updateLines = () => {
	oldLines = arrClone(newLines)
	newLines = generateTrends(lineCount, stepCount)
	lastUpdate = Date.now()

	setTimeout(updateLines, updateInterval)
}

const graphCanvas = (containerEl, canvasEl) => {
	container = containerEl
	canvas = canvasEl
	ctx = canvas.getContext('2d')

	resize()

	newLines = new Array(lineCount).fill(new Array(Math.pow(2, stepCount) + 1).fill(0))
	updateLines()

	window.addEventListener('resize', resize)

	requestAnimationFrame(draw)
}

export default graphCanvas