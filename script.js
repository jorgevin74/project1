gsap.registerPlugin(SplitText);

strtBtn = document.getElementById("start");

let split = SplitText.create(".text-container", { type: "words, chars, lines" });

// now animate the characters in a staggered fashion
// gsap.from(split.words, {
//     y: -100,
//     opacity: 0,
//     rotation: "random(-80, 80)",
//     duration: 0.7, 
//     ease: "back",
//     stagger: 0.15
// });

  gsap.from(split.chars, {
    x: 150,
    opacity: 0,
    duration: 2, 
    ease: "power4",
    stagger: 0.04
  })
  
  // gsap.from(split.lines, {
  //   rotationX: -100,
  //   transformOrigin: "50% 50% -160px",
  //   opacity: 0,
  //   duration: 0.8, 
  //   ease: "power3",
  //   stagger: 0.25
  // })

