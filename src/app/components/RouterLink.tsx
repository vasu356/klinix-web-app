import { Link, LinkProps } from "react-router-dom";

export function RouterLink({ children, className, ...props }: LinkProps) {
  return <Link className={className} {...props}>{children}</Link>;
}
