import { Application } from "@splinetool/runtime";

// Make sure you have a canvas in the body
const canvas = document.getElementById("canvas3ds");

// Start the application and load the scene
const spline = new Application(canvas);
spline
  .load("https://prod.spline.design/27cS4Q-zrpQGgbdB/scene.splinecode")
  .then(() => {
    // Find the object by name (e.g., "Cube")

    // Check if the object was found
    if (spline) {
      // Log the object for debugging
      console.log(spline); // { name: 'Cube', id: '...', position: { x: 0, y: 0, z: 0 }, ... }

      // Set the XYZ position of the object
      obj.position.x = 40; // Move 10 units on the X axis
      obj.position.y = 5; // Move 5 units on the Y axis
      obj.position.z = -2; // Move -2 units on the Z axis

      console.log(
        `Object new position: (${spline.position.x}, ${spline.position.y}, ${spline.position.z})`
      );
    } else {
      console.error('Object "Cube" not found in the scene.');
    }
  })
  .catch((error) => {
    console.error("Error loading Spline scene:", error);
  });
