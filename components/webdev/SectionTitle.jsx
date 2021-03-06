import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <div className="font-gilroy font-medium text-lg text-center">
        {subtitle && <h4 className="pb-8">{subtitle}</h4>}

        {title && <h3 className="font-semibold text-5xl">{title}</h3>}
      </div>
    </div>
  );
}
