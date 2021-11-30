const RightTriangle = ({ color }) => {
  let clr;

  switch (color) {
    case "accent":
      clr = "#49AD09";
      break;
    case "dark-secondary":
      clr = "#514040";
      break;
    default:
      clr = "#514040";
  }

  return (
    <svg width="100%" height="100%" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4.5L8.34347e-08 9L4.76837e-07 -3.0598e-07L7 4.5Z" fill={clr} />
    </svg>
  );
};

export default RightTriangle;
