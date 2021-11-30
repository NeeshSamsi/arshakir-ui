import RightTriangle from "./icons/RightTriangle";

const BTN = ({ text, outline }) =>
  outline ? (
    <a href="/" className="py-4 px-11 rounded-md text-web.dev-dark-secondary border border-web.dev-dark-secondary">
      {text}
    </a>
  ) : (
    <a href="/" className="py-4 px-11 rounded-md bg-web.dev-accent text-white shadow-2xl">
      {text}
    </a>
  );

const Link = ({ text, icon, theme }) => {
  const color = theme.accent ? "accent" : "dark-secondary";

  return icon ? (
    <div className="flex items-center space-x-3 rounded-md">
      <a href="/" className={`font-medium text-lg text-web.dev-${color} ${theme.underline ? "underline" : ""}`}>
        {text}
      </a>
      <div className="w-2">
        <RightTriangle color={color} />
      </div>
    </div>
  ) : (
    <a href="/" className={`font-medium text-lg text-web.dev-${color} ${theme.underline ? "underline" : ""}`}>
      {text}
    </a>
  );
};

export default function CTA({ text, icon, underline, accent, btn, outline }) {
  const theme = { underline, accent };

  if (btn) {
    if (outline) {
      return <BTN outline text={text} />;
    }
    return <BTN text={text} />;
  }

  if (!btn) {
    if (icon) {
      return <Link text={text} icon theme={theme} />;
    }
    return <Link text={text} theme={theme} />;
  }
}
