const box = document.querySelectorAll('.box')
// rando renk üretme
const randomColor = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)
	return `rgb(${r},${g},${b})`
}
box.forEach((box) => {
	box.onmouseenter = () => {
		box.style.backgroundColor = randomColor()
	}
	box.onmouseleave = () => {
		setTimeout(() => {
			box.style.backgroundColor = 'black'
		}, 1000)
	}
})
