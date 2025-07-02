import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const Annoyed: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    ref.current?.animate(
      [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
      {
        duration: 600,
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 15h8" ref={ref} />
      <path d="M8 9h2" />
      <path d="M14 9h2" />
    </svg>
  );
};
