import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const Camera: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!hovered) return;

    circleRef.current?.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.2)" },
        { transform: "scale(1)" },
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" ref={circleRef} />
    </svg>
  );
};
