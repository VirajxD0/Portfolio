gsap.to("#canvas3ds", {
  x: -6,
  duration: 2,
  delay: 3,
});

var tl = gsap.timeline();

gsap.from("nav", {
  y: -30,
  delay: 2,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
});

gsap.from("nav-link", {
  y: -30,
  delay: 2,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
});

gsap.from("h1", {
  y: 40,
  delay: 2,
  opacity: 0,
  duration: 2,
});
