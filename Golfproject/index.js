gsap.to("#nav", {
  backgroundColor: "#000000f6",
  duration: 2,
  ease: "bounce.out",
  height: "8vmax",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("main", {
  backgroundColor: "black",
  duration: 2,
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    start: "top -40%",
    end: "top 35%",
    scrub: 1,
  },
});
const crsr = document.getElementById("cursor");
const cursr_blr = document.getElementById("cursor-blur");

document.addEventListener("mousemove", (e) => {
  console.log(crsr);
  crsr.style.left = e.x + "px";
  crsr.style.top = e.y + "px";
  cursr_blr.style.left = e.x - 200 + "px";
  cursr_blr.style.top = e.y - 200 + "px";
});

const allh4 = document.querySelectorAll("#nav h4");
console.log(allh4);
allh4.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    crsr.style.scale = "1.8";
    crsr.style.border = "1px solid white";
    crsr.style.background = "transparent";
  });
  elem.addEventListener("mouseout", () => {
    crsr.style.scale = "1";
    crsr.style.border = "none";
    crsr.style.background = "#96c11e";
  });
});

gsap.from("#page-About div", {
  y: 90,
  opacity: 0,
  stagger: "1",
  duration: 3,
  scrollTrigger: {
    trigger: "#page-About",
    scroller: "body", // This line might not be necessary
    start: "top 50%",
    end: "top 60%",
    scrub: 3,
  },
});
gsap.from(".card", {
  scale: 0.6,
  opacity: 0,
  delay: 1,
  duration: 3,
  // ease:"bounce.out",
  stagger: "1",
  scrollTrigger: {
    trigger: "#card-container",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    scrub: 3,
  },
});
// !---------

gsap.from("#top", {
  x: -50,
  y: -80,
  duration: 1,
  scrollTrigger: {
    trigger: "#pagethird",
    scroller: "body",
    start: "top 50%",
    end: " top 40%",
    scrub: 1,
  },
});

gsap.from("#bottom", {
  x: 50,
  y: 80,
  duration: 1,
  scrollTrigger: {
    trigger: "#pagethird",
    scroller: "body",
    start: "top 50%",
    end: " top 40%",
    scrub: 1,
  },
});
gsap.from("#container h1", {
  top: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#container",
    scroller: "body",
    start: "top 95%",
    end: " top 90%",
    scrub: 4,
  },
});

gsap.to("#arrow-down", {
  y: -50,
  opacity: 0.8,
  yoyo: true,
  repeat: -1,
  duration: 1.5,
  delay: 0.5,
  backgroundColor: "#96c11e",
});
// -------------------------------------------
const slides = document.querySelectorAll(".slider img");
const indicatorsContainer = document.querySelector(".indicators");

let slideIndex = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${n * 100}%)`;
  });
}

function setActiveIndicator(index) {
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
  setActiveIndicator(slideIndex);
}

// Create indicators
slides.forEach((_slide, index) => {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  indicator.addEventListener("click", () => {
    showSlide(index);
    setActiveIndicator(index);
    slideIndex = index;
  });
  indicatorsContainer.appendChild(indicator);
});

setInterval(nextSlide, 4000);
