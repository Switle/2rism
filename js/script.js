const burger = () => {
	const menu = document.querySelector('.menu')
	const burger = document.querySelector('.burger')

	const toggleClassActive = element => {
		element.classList.toggle('active')
	}

	const toggleMenu = () => {
		toggleClassActive(menu)
		toggleClassActive(burger)
	}

	burger.addEventListener('click', toggleMenu)
}

burger()
