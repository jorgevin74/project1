gsap.registerPlugin(SplitText) 

const title_card = document.getElementById("title");
const strtBtn = document.getElementById("start");
const text = document.getElementById("prompt");

const option_1 = document.getElementById("option_1");
const option_2 = document.getElementById("option_2");
const option_3 = document.getElementById("option_3");

// split elements with the class "split" into words and characters

function split(){
  split = SplitText.create(".text-container", { type: "words, chars, lines" });
  return split;
}

strtBtn.addEventListener("click", () => {
  // reveal UI first
  option_1.style.visibility = "visible";
  option_2.style.visibility = "visible";
  option_3.style.visibility = "visible";
  title_card.style.visibility = "hidden";
  strtBtn.style.visibility = "hidden";
  text.style.visibility = "visible";
  split();
  // animate words
  gsap.from(split.lines, {
    duration: 2,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
  });
});




