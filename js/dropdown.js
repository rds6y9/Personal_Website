var nav_menu = document.getElementById("dropdown-nav-menu");

function showNavMenu() {
	console.log("showNavMenu() ran.");
	if($("#dropdown-nav-menu").css("display") == "none") {
		console.log("nav_menu was turned on.")
		nav_menu.style.display = "inline-block";
	} else {
		console.log("nav_menu was turned off.")
		nav_menu.style.display = "none";
	}
	// $('#dropdown-nav-menu').toggleClass('menu-hidden');
	$('#dropdown-nav-menu').toggleClass('menu-shown');
	$('#dropdown-nav-button').toggleClass('menu-active');
}

// value = $("#anID").css("display");