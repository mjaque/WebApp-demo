
let vista1 = null
let vista2 = null
let btnVista1 = null
let btnVista2 = null

window.onload = iniciar

function iniciar(){
	vista1 = document.getElementById('vista1')
	vista2 = document.getElementById('vista2')

	btnVista1 = vista1.getElementsByTagName('button')[0]
	btnVista2 = vista2.getElementsByTagName('button')[0]

	btnVista1.onclick = () => {
		vista1.style.display = 'none'
		vista2.style.display = 'block'
	 }

	btnVista2.onclick = () => {
		vista1.style.display = 'block'
		vista2.style.display = 'none'
	 }
}
