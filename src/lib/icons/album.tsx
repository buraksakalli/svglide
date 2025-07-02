import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const Album: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const ref = useRef<SVGPolylineElement>(null);

  useEffect(() => {
    if (!hovered) return;

    ref.current?.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(-1px)" }, { transform: "translateY(0)" }],
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <polyline points="11 3 11 11 14 8 17 11 17 3" ref={ref} />
    </svg>
  );
};
