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



var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
if (a.indexOf('html') > -1) { //Check of html String in URL.
   url = url.substring(0, newURL.lastIndexOf("."));
}



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
		smartSpeed: 1000,
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

        
});