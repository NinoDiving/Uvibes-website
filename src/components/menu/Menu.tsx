"use client";
import { StyledBottomNavigation } from "@/styles/menu/StyledBottomNavigation";
import { StyledFloatButton } from "@/styles/menu/styledFloatingMenu";
import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";
import "../../styles/menu/Menu.css";
import MenuList from "./MenuList";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <StyledFloatButton
        onClick={handleClick}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      >
        {isOpen ? (
          <X size={32} color="#32BDCA" />
        ) : (
          <AlignJustify size={32} color="#32BDCA" />
        )}
      </StyledFloatButton>

      {isOpen && (
        <nav className="menu-items-container">
          <MenuList className="menu-items" />
        </nav>
      )}

      <StyledBottomNavigation
        style={{
          transform: isActive ? "translateX(0px)" : "translateX(1000px)",
          opacity: isActive ? 1 : 0,
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
        }}
      >
        <MenuList className="menu-items-bottom-nav" />
      </StyledBottomNavigation>
    </>
  );
}
