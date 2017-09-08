var nav_menu = document.getElementById("dropdown-nav-menu");

function showNavMenu() {
	console.log("showNavMenu() ran.");
	if(nav_menu.style.display == "none") {
		nav_menu.style.display == "inline-block";
	} else {
		nav_menu.style.display == "none";
	}
}