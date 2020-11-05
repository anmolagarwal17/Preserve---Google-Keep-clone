document.getElementById('theme-btn').addEventListener('click', () => {
	document
		.querySelectorAll('#theme-btn span')
		.forEach((el) => el.classList.toggle('d-none'));
});
