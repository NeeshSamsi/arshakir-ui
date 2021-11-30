import React from "react";

export default function Squiggle({ color }) {
  let clr;

  switch (color) {
    case "accent":
      clr = "#49AD09";
      break;
    case "dark-primary":
      clr = "#313131";
      break;
    default:
      clr = "#313131";
  }

  return (
    <svg width="100%" height="100%" viewBox="0 0 272 519" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M122.474 518.5C153.974 436.167 186.374 274.2 63.9743 285C-89.0257 298.5 69.9743 463 189.474 354.5C308.974 246 275.474 18 225.474 1"
        stroke={clr}
      />
    </svg>
  );
}
