gsap.registerPlugin(SplitText);

let split, split_2, split_3;

function splitInstance(){
  split = SplitText.create(".text-container", { type: "words, chars, lines" });
  return split;
};

function splitInstance_2(){
  split_2 = SplitText.create(".text-container-lines", { type: "words, chars, lines" });
  return split_2;
};

function splitInstance_3(){
  split_3 = SplitText.create(".text-container-chars", { type: "words, chars, lines" });
  return split_3;
}

  splitInstance();
  gsap.from(split.words, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 2, 
      ease: "back",
      stagger: 0.15
  });

  splitInstance_2();
  gsap.from(split_2.lines, {
    rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 2, 
    ease: "power3",
    stagger: 1.7
  });


  splitInstance_3();
  gsap.from(split_3.chars, {
    x: 150,
    opacity: 0,
    duration: 2, 
    ease: "power4",
    stagger: 0.04
  });

