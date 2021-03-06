const Semicircle = ({ color }) => {
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
    <svg width="100%" height="100%" viewBox="0 0 238 119" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M202.593 35.1736C224.676 57.2569 237.133 87.1664 237.265 118.383L0.501054 118.383C0.632724 87.1664 13.0904 57.2569 35.1736 35.1736C57.3748 12.9725 87.486 0.499998 118.883 0.5C150.28 0.500002 180.391 12.9725 202.593 35.1736Z"
        stroke={clr}
      />
    </svg>
  );
};

export default Semicircle;
