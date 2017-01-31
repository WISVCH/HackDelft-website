import dates from '../schedule.json'

const DAY = 1000*60*60*24

const startDate = new Date("2017-05-13T00:00:00+02:00")

const convertDate = date => Object.assign(date, {
	start: new Date(date.start),
	end: date.end ? new Date(date.end) : null
})

const only2 = n => ('0' + n).slice(-2)

const parseTime = date =>
	only2(date.getHours()) + ':' + only2(date.getMinutes())

const insertDate = days => item => {
	const day = Math.floor((item.start - startDate) / DAY) * DAY

	const el = document.createElement('div')
	el.className = 'date'
	el.classList.toggle('duration', item.end)
	el.classList.toggle('important', item.description.includes('Hacking'))
	el.dataset.start = parseTime(item.start)
	el.dataset.end = item.end ? parseTime(item.end) : ''
	el.innerText = item.description

	days[day / DAY].appendChild(el)
}

const schedule = root => {
	const days = root.querySelectorAll('.day');

	dates.map(convertDate)
		 .forEach(insertDate(days))
}

export default schedule