Shery.mouseFollower({
  skew: true,
  debug: false,
  duration: 1,
});

Shery.makeMagnet(".main-text", {
  ease: "cubic-bezier(1.23, 1, 1.320, 1)",
  duration: 1.2,
});

Shery.makeMagnet(".list-icon", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".plan-card", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".aboutus-li-items", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.textAnimate(".main-text", {
  style: 1,
  y: 10,
  delay: 0.2,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.textAnimate(".sec-info", {
  style: 1,
  y: 10,
  delay: 0.03,
  duration: .6,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.01,
});