"use strict";

const navBurger = document.querySelector(".navBurger");
const Navmenu = document.querySelector(".Navmenu");
const menuEffect  = document.querySelector(".menu-effect");

navBurger.addEventListener("click", (e)  => {

	// Selecting burgers and toggling a class
	const burgers = navBurger.children;
	Array.from(burgers)
	    .forEach( burger =>{
			burger.classList.toggle("hidden")
		});

	if (Navmenu.classList.contains("showMenu")) {
		Navmenu.classList.remove("showMenu");

	  } else {
		Navmenu.classList.add("showMenu");
	
	  }

});








$(document).ready(function(){

/*----------------------------------------------------*/
	/*	Testimonial owlCarousel
    /*----------------------------------------------------*/
	let tSlide = $(".testimonial-slide");
	tSlide.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
        margin: 40,
		dots: false,
		nav: true,
        navText: ["<div class='nav-button owl-prev '>‹</div>", "<div class='nav-button owl-next'>›</div>"],
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		responsive: {
			0: {
				items: 1,
			},
			767: {
				items: 1,
			},
			768: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	let bSlide = $(".blog-slide");
	bSlide.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
        margin: 40,
		dots: false,
		nav: true,
        navText: ["<div class='nav-button owl-prev '>‹</div>", "<div class='nav-button owl-next'>›</div>"],
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		responsive: {
			0: {
				items: 1,
			},
			767: {
				items: 1,
			},
			768: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});


    
	var url = window.location.href;
	url = url.substring(0, url.lastIndexOf("."));
	
	window.history.replaceState( null, null, url )
	
	

        
});