import dates from '../schedule.json'

const SECOND = 1000
const MINUTE = SECOND*60
const HOUR = MINUTE*60
const DAY = HOUR*24

const startDate = new Date("2017-05-13T00:00:00+02:00")

let formattedDates

// Elements
const hackTimer = document.querySelector('#hackTimer .timer')
const nextState = document.querySelector('.next-state')

const eventTimer = document.querySelector('#eventTimer .timer')
const event = document.querySelector('.event')

const formatTime = (td, l, m) => {
	const n = '' + Math.floor(td/l % m)
	return ('00' + n).substring(n.length)
}

const formatDate = td =>
	`${formatTime(td, HOUR, 1000)}:${formatTime(td, MINUTE, 60)}:${formatTime(td, SECOND, 60)}`

const updateHacking = currentDate => {
	const hacking = {
		start: new Date("2017-05-13T16:00:00+02:00"),
		end:   new Date("2017-05-14T14:30:00+02:00")
	}

	const started = currentDate >= hacking.start

	nextState.innerText = started ? 'ends' : 'starts'

	if (started) {
		hackTimer.innerText = formatDate(hacking.end - currentDate)
	} else {
		hackTimer.innerText = formatDate(hacking.start - currentDate)
	}
};

const first = xs => xs.length ? xs[0] : null;

const last = xs => xs.length ? xs[xs.length - 1] : null;

const updateEvents = currentDate => {
	const lastEvent = last(formattedDates.filter(date => date.start < currentDate))
	const nextEvent = first(formattedDates.filter(date => date.start > currentDate))

	const busy = lastEvent != null && currentDate >= lastEvent.start && currentDate - lastEvent.start < HOUR

	if (busy) {
		eventTimer.innerText = "Now"
		event.innerText = lastEvent.description
	} else if (nextEvent == null) {
		eventTimer.innerText = "Now"
		event.innerText = "HackDelft is over..."
	} else {
		eventTimer.innerText = formatDate(nextEvent.start - currentDate)
		event.innerText = `${nextEvent.description} in`
	}
}

const update = () => {
	const currentDate = Date.now()

	updateHacking(currentDate)
	updateEvents(currentDate)
}

const convertDate = date => Object.assign(date, {
	start: new Date(date.start)
})

const now = () => {
	if (hackTimer != null) {
		formattedDates = dates.map(convertDate)

		update()
		setInterval(update, 1000)
	}
}

export default now