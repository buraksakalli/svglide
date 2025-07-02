import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const Apple: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const leafRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    leafRef.current?.animate(
      [
        { transform: "translate(0,0)" },
        { transform: "translate(1px,-1px)" },
        { transform: "translate(0,0)" },
      ],
      {
        duration: 400,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );
  }, [hovered]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" ref={leafRef} />
    </svg>
  );
};
