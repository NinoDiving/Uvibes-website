"use client";
import MenuItem from "@/components/menu/MenuItem";
import Resize from "@/services/resize/resize";
import { StyledBottomNavigation } from "@/styles/menu/StyledBottomNavigation";
import { StyledFloatButton } from "@/styles/menu/styledFloatingMenu";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Items } from "../../data/menu/MenuData";
import "../../styles/menu/Menu.css";
import MenuList from "./MenuList";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);
  const {isDesktop} = Resize();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isBottom = windowHeight + currentScrollY >= documentHeight - 50;
      setIsAtBottom(isBottom);

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

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="floating-menu-container">
        <div style={{ cursor: "pointer" }} onClick={scrollToContact} className="megaphone-container" >
          <Image
            src={
              isDesktop
                ? "/images/icone_megaphone_bleu.svg"
                : "/images/icone_megaphone_bleu_rond.svg"
            }
            width={40}
            height={40}
            alt="Fonctionnalités de l'application"
          />
          {isDesktop && <p>Nous Contacter</p>}
        </div>
        <StyledFloatButton
          onClick={handleClick}
          onKeyDown={(e) => e.key === "Enter" && handleClick()}
          style={{ position: "static", margin: -10 }}
        >
          {isOpen ? (
            <X size={32} color="#32BDCA" />
          ) : (
            <AlignJustify size={32} color="#32BDCA" />
          )}
        </StyledFloatButton>
      </div>

      {isOpen && (
        <nav className="menu-items-container">
          <MenuList className="menu-items" />
        </nav>
      )}


      <div
        style={{
          position: "fixed",
          bottom: "var(--spacing-ref)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "1rem",
          zIndex: 9999,
          pointerEvents: isActive && !isAtBottom ? "auto" : "none",
        }}
      >
        <StyledBottomNavigation
          style={{
            height: "90px",
            position: "relative",
            left: "auto",
            right: "auto",
            bottom: "auto",
            margin: 0,
            transform:
              isActive && !isAtBottom
                ? "translateX(0px)"
                : "translateX(1000px)",
            opacity: isActive && !isAtBottom ? 1 : 0,
            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
        >
          <MenuList className="menu-items-bottom-nav" />
        </StyledBottomNavigation>
        <div
          style={{
            height: "90px",
            backgroundColor: "var(--background-paper, #fff)",
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            borderRadius: "calc(var(--border-radius) * 2.5)",
            padding: "calc(var(--spacing-ref) * 2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform:
              isActive && !isAtBottom
                ? "translateX(0px)"
                : "translateX(1000px)",
            opacity: isActive && !isAtBottom ? 1 : 0,
            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
        >
          <MenuItem
            key={Items[6].id}
            {...Items[6]}
            className={"menu-items-bottom-nav"}
          />
        </div>
      </div>
    </>
  );
}
