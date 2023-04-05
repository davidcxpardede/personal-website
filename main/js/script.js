/* ===== TOGGLE ICON NAVIGATION BAR =====*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

/* ===== SCROLL SECTIONS ACTIVE LINK =====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nac a[href*=' + id + ']').classList.add('active');
			});
		};
	});

	/* ===== STICKY NACIGATION BAR =====*/

	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 100);

	/* ===== REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL) =====*/

	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

/* ===== SCROLL REVEAL =====*/
ScrollReveal({
	//reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });

/* ===== TYPED JS =====*/
const typed = new Typed('.multiple-text', {
	strings: ['Racing Electric Motorcycle Engineer', 'Frontend Developer', 'Writer', 'Data Analyst', 'Aerospace Enthusiast'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});