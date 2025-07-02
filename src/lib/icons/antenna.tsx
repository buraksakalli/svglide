import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const Antenna: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    ref.current?.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
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
      <path d="M2 12 7 2" />
      <path d="m7 12 5-10" />
      <path d="m12 12 5-10" />
      <path d="m17 12 5-10" />
      <path d="M4.5 7h15" />
      <path d="M12 16v6" ref={ref} />
    </svg>
  );
};
