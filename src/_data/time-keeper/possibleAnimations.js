const animations = {
  excited: [
    { transform: "scale(1, 0.8)" },
    { transform: "scale(1, 1.2)", easing: "ease-in-out", offset: 0.25 },
    { transform: "scale(1, 0.8)", easing: "ease-in-out", offset: 0.5 },
    { transform: "scale(1, 1.2)", easing: "ease-in-out", offset: 0.75 },
    { transform: "scale(1, 0.8)", easing: "ease-in-out" }
  ],
  relaxed: [
    { transform: "scale(1, 0.9)" },
    { transform: "scale(1, 1.1)", easing: "ease-in-out", offset: 0.5 },
    { transform: "scale(1, 0.9)", easing: "ease-in-out" }
  ]
};

export default animations;