const $ = require('jquery');

import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
// theme change logic & event listner
document.getElementById('theme-btn').addEventListener('click', () => {
	document.querySelectorAll('#theme-btn svg').forEach((el) => {
		el.classList.toggle('d-none');
		// add theme changing code here
	});
	document.body.classList.toggle('dark');
});

// toggle d-none class
function toggleDnone(el) {
	el.classList.toggle('d-none');
}

// sidebar toggle
document.getElementById('sidebar-toggle').addEventListener('click', () => {
	document.querySelector('main').classList.toggle('collapsed');
	document
		.querySelectorAll('.list-group span')
		.forEach((el) => toggleDnone(el));
});
