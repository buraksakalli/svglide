import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const Asterisk: React.FC<IconProps> = ({ "data-hovered": hovered, ...props }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;
    ref.current?.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.1)" },
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
      ref={ref}
      {...props}
    >
      <path d="M12 6v12" />
      <path d="M17.196 9 6.804 15" />
      <path d="m6.804 9 10.392 6" />
    </svg>
  );
};
