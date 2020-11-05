import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap';

// import 'node_modules/jquery';

// // Import Popper
// import 'node_modules/popper.js';

// // Import Bootstrap 4 jQuery
// import 'node_modules/bootstrap';

// alert(new Date())

// import 'jquery/dist/jquery.js';
// import 'popper.js/dist/umd/popper.js';
// import 'boostrap/dist/js/bootstrap.min.js';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

import './ui';

import '../css/style.css';

// todo use uuid to generate different ids for different notes

document.addEventListener('dblclick', () => {
	document.querySelector('#sdaf').classList.toggle('hello');
});

document.querySelector('.hello').addEventListener('click', () => alert());
