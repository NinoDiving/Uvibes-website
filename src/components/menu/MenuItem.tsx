import type { MenuItemProps } from "@/types/menu/MenuItemProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../styles/menu/MenuItem.css";

export default function MenuItems({ icon, label, color, link }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === link;
  const isGradient = color.startsWith("linear-gradient");

  return (
    <Link
      href={link}
      passHref
      className="items-link"
      style={{
        fontWeight: isActive ? "bolder" : "normal",
        transform: isActive ? "scale(1.3)" : "scale(1)",
        transition: "all 0.2s ease",
      }}
    >
      {icon}
      <p
        className="items-label"
        style={
          isGradient
            ? {
                background: color,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }
            : { color }
        }
      >
        {label}
      </p>
    </Link>
  );
}
