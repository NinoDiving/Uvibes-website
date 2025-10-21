"use client";
import Resize from "@/services/resize/resize";
import { StyledBottomNavigation } from "@/styles/menu/StyledBottomNavigation";
import { StyledFloatButton } from "@/styles/menu/styledFloatingMenu";
import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";
import "../../styles/menu/Menu.css";
import MenuList from "./MenuList";
import MenuItem from "@/components/menu/MenuItem";
import { Items } from "../../features/menu/MenuData";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const isMobile = Resize();
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

      {isOpen && !isMobile && (
          <>
              <nav className="menu-items-desktop-container">
                  <MenuList className="menu-items-desktop"/>
              </nav>
          </>
      )}
      <div style={{
          position: "fixed",
          bottom: "var(--spacing-ref)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "1rem",
          zIndex: 9999,
      }}>
          <StyledBottomNavigation
              style={{
                  position: "relative",
                  left: "auto",
                  right: "auto",
                  bottom: "auto",
                  margin: 0,
                  transform: isActive ? "translateX(0px)" : "translateX(1000px)",
                  opacity: isActive ? 1 : 0,
                  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
              }}
          >
              <MenuList className="menu-items-bottom-nav"/>
          </StyledBottomNavigation>
          <div
              style={{
                  height: "80px",
                  backgroundColor: "var(--background-paper, #fff)",
                  boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                  borderRadius: "calc(var(--border-radius) * 2.5)",
                  padding: "calc(var(--spacing-ref) * 2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: isActive ? "translateX(0px)" : "translateX(1000px)",
                  opacity: isActive ? 1 : 0,
                  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
              }}
          >
              <MenuItem key={Items[6].id} {...Items[6]} className={"menu-items-bottom-nav"}/>
          </div>
      </div>
    </>
  );
}
