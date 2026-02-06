import Image from "next/image";
import Link from "next/link";
import Logo_uVibesDesktop from "../../../public/images/Logo UVIBES.png";
import Logo_uVibes from "../../../public/images/Logo VI blanc.png";
import "../../styles/banner/heroBanner.css";
import type { HeroBannerProps } from "../../types/banner/heroBanner";

export function HeroBanner({
  title,
  subtitle,
  description,
  image,
  alt,
}: HeroBannerProps) {
  return (
    <header className="hero-banner-wrapper">
      <figure>
        <Image
          src="/images/Vibration-white.svg"
          alt={alt}
          className="hero-vibration"
          width={800}
          height={900}
          priority
        />
      </figure>
      <div className="hero-banner-container">
        <div className="hero-banner-header-top">
          <Link href="/" passHref>
            <Image
              src={Logo_uVibes}
              alt="Logo uVibes"
              width={80}
              className="logo_mobile"
            />
            <Image
              src={Logo_uVibesDesktop}
              alt="Logo uVibes desktop"
              width={400}
              className="logo_desktop"
            />
          </Link>
        </div>

        <div className="hero-banner-body">
          <section className="hero-banner-content">
            <h1 className="visually-hidden">{title}</h1>
            <h2 className="title-text">{subtitle}</h2>
            <h1 className="title-h1">{title}</h1>
            <p className="title-text-light">{description}</p>
          </section>

          {/* image unique, affichée uniquement en desktop */}
          <figure className="hero-banner-image-container desktop-only">
            <Image
              src={image}
              alt={alt}
              className="hero-banner-image-desktop"
              width={1000}
              height={1000}
              priority
            />
          </figure>
        </div>
      </div>

      {/* image identique, affichée uniquement en mobile */}
      <figure className="hero-banner-image-container mobile-only">
        <Image
          src={image}
          alt={alt}
          className="hero-banner-image"
          width={400}
          height={400}
          priority
        />
      </figure>
      <figure>
        <Image
          src="/images/Vibration-right.svg"
          alt={alt}
          className="hero-vibration-right"
          width={800}
          height={900}
          priority
        />
      </figure>
    </header>
  );
}
