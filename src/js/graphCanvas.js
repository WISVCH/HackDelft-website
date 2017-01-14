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

let canvas, ctx, w, h, offset, oldLines, newLines, lastUpdate

const part = 0.3
const updateDuration = 2000 //ms
const updateInterval = 2500 //ms
const lineCount = 3
const stepCount = 4

const resize = () => {
	w = window.innerWidth
	h = window.innerHeight

	canvas.width = w
	canvas.height = h

	scroll()
}

const scroll = () => {
	offset = Math.min(window.scrollY, (1 - part) * h)
}

const draw = () => {
	ctx.clearRect(0, 0, w, h)

	getLines().forEach(line => {
		ctx.beginPath()
		ctx.moveTo(0, h - offset - line[0])

		for (let i = 1, l = line.length - 1; i <= l; i++) {
			ctx.lineTo(i * w / l, h - offset - line[i])
		}

		ctx.strokeStyle = '#fff'
		ctx.stroke()

		ctx.lineTo(w, h)
		ctx.lineTo(0, h)
		ctx.closePath()

		ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
		ctx.fill()
	})

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

	res[0]              = rand(0, h * part)
	res[res.length - 1] = rand(0, h * part)

	let size = points;

	while ((size = size / 2) >= 1) {
		for (let i = size; i < points; i += 2*size) {
			res[i] = (res[i - size] + res[i + size]) / 2 // Average
			res[i] += rand(-h * part, h * part) * size / points // Add random part
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

const graphCanvas = canvasEl => {
	canvas = canvasEl
	ctx = canvas.getContext('2d')

	resize()

	newLines = new Array(lineCount).fill(new Array(Math.pow(2, stepCount) + 1).fill(0))
	updateLines()

	window.addEventListener('resize', resize)
	window.addEventListener('scroll', scroll)

	requestAnimationFrame(draw)
}

export default graphCanvas