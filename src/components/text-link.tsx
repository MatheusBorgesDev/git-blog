import { ComponentProps } from "react";

type TextLinkProps = ComponentProps<"a">;

export function TextLink({ children, className, ...props }: TextLinkProps) {
  return (
    <a
      href="#"
      className={`hover:text-baseAccent flex items-center gap-2 text-sm uppercase text-blue hover:border-b hover:border-blue ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
