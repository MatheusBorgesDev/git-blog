import { ComponentProps } from "react";

type ProfileInfoProps = ComponentProps<"div"> & {
  icon: React.ElementType;
};

export function ProfileInfo({
  icon: Icon,
  children,
  ...props
}: ProfileInfoProps) {
  return (
    <div className="flex items-center gap-2 text-baseSubtitle" {...props}>
      <Icon size={18} className="text-baseLabel" />
      {children}
    </div>
  );
}
