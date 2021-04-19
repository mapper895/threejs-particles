const content = CSSRulePlugin.getRule(".content:before");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const tl = gsap.timeline();

tl.from(content, { delay: 0.5, duration: 4, cssRule: { scaleX: 0 } });
tl.to(
  h1,
  {
    duration: 2,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    y: "30px",
  },
  "-=3"
);
tl.to(
  p,
  {
    duration: 4,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    y: "30px",
  },
  "-=2"
);
