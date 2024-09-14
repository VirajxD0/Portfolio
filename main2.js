import { Application } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Initialize Spline application
const canvas = document.getElementById("canvas3ds");
const spline = new Application(canvas);

// Load the scene and set up the animation
spline
  .load("https://prod.spline.design/60bmf97LcGdPYIAR/scene.splinecode")
  .then(() => {
    // Assuming the object has a name like 'objectName', you can find it by name
    const object = spline.findObjectByName("keyboard");

    if (object) {
      // Create a timeline for the scroll animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#particles-js1",
            start: "top center",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(object.position, {
          // Move the object to the left (adjust the value as needed)
          x: -50,
          y: 50,
          duration: 1,
          scale: 6,
        });
    }
  });
