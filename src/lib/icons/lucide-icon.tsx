import { useEffect, useRef, createElement } from "react";
import * as LucideIcons from "lucide-react";
import type { IconProps } from "./icon.types";

export interface LucideIconProps extends IconProps {
  name: keyof typeof LucideIcons | string;
}

export const LucideIcon: React.FC<LucideIconProps> = ({
  name,
  "data-hovered": hovered,
  ...props
}) => {
  const Icon = (LucideIcons as any)[name] as React.FC<React.SVGProps<SVGSVGElement>>;
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;
    ref.current?.animate(
      [
        { transform: "translateY(-2px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 400,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );
  }, [hovered]);

  if (!Icon) return null;
  return createElement(Icon, { ref, ...props });
};
