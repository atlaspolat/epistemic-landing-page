// Header slides down like a drawer once the intro is scrolled past
const header = document.querySelector(".site-header");
const onScroll = () => {
	const trigger = window.innerHeight * 0.6;
	header.classList.toggle("is-visible", window.scrollY > trigger);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll, { passive: true });

// Scroll reveal
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");
if (prefersReduced || !("IntersectionObserver" in window)) {
	reveals.forEach((el) => el.classList.add("is-in"));
} else {
	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-in");
					io.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
	);
	reveals.forEach((el) => io.observe(el));
}

// Year
const setYear = () => {
	const y = document.getElementById("year");
	if (y) y.textContent = new Date().getFullYear();
};
setYear();
