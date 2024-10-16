import { Application } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Initialize Spline application
const canvas = document.getElementById("canvas3ds");
const spline = new Application(canvas);

// Load the Spline scene and set up the animation
spline.load("https://prod.spline.design/60bmf97LcGdPYIAR/scene.splinecode");
