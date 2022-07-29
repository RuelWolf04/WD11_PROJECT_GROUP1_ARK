const navbar = document.getElementById("navbar");
const navbarOffsetTop = navbar.offsetTop;

function Scroll() {
	if (window.pageYOffset >= navbarOffsetTop) {
		navbar.classList.add("navbar--sticky");
	} else {
		navbar.classList.remove("navbar--sticky");
	}
}

window.addEventListener("scroll", Scroll);


