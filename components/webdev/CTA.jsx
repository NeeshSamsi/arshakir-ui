import RightTriangle from "./RightTriangle";

export default function CTA({ text, icon }) {
  if (icon) {
    
    return (
      <div className="flex justify-between items-center space-x-2">
        <a href="/" className="py-4 px-11 rounded-md text-web.dev-dark-secondary underline">
          {text}
        </a>
        <div>
          {switch (icon) {
            case "right-triangle":
              return <RightTriangle />
            default:
              return
            }
          }
        </div>
      </div>
    );
  }

  return (
    <a href="/" className="py-4 px-11 rounded-md bg-web.dev-accent text-white shadow-2xl">
      {text}
    </a>
  );
}
