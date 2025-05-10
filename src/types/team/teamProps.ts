import type { StaticImageData } from "next/image";

export type TeamProps = {
  image: string | StaticImageData;
  alt: string;
  name: string;
  position: string;
  team: string;
};
