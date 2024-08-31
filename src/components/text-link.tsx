import { ComponentProps } from "react";
import { Link } from "react-router-dom";

interface TextLinkProps extends ComponentProps<"a"> {
  navigateTo: string;
}

export function TextLink({
  navigateTo,
  children,
  className,
  ...props
}: TextLinkProps) {
  return (
    <Link
      to={navigateTo}
      className={`hover:text-baseAccent flex items-center gap-2 text-sm uppercase text-blue hover:border-b hover:border-blue ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
