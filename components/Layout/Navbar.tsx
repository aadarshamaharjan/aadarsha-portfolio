import gsap from "gsap";
import { useEffect, useState } from "react";
import Contact from "../Contact";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/Aadarsha-Logo.png";
export default function Navbar() {
  const [open, setOpen] = useState(document.querySelector(".active"));
  const [close, setClose] = useState(document.querySelector(".exit"));
  const tl = gsap.timeline();

  tl.to(".overlay", {
    opacity: 1,
    x: 0,
    scale: 1,
    pointerEvents: "auto",
    duration: 0.3,
  });
  tl.to(".stagger", { x: 0, opacity: 1, stagger: 0.2 }, "-=.3");
  tl.pause();
  useEffect(() => {
    setOpen(document.querySelector(".active"));
    setClose(document.querySelector(".exit"));
    if (open)
      open.addEventListener("click", () => {
        tl.play();
      });

    if (close)
      close.addEventListener("click", () => {
        tl.reverse();
      });
  }, [open, close, tl]);

  return (
    <>
      <nav
        className={
          "flex justify-between h-20 items-center px-8 fixed top-0 left-0 w-full z-30 bg-primary"
        }
        id="top"
      >
        <div className={""}>
          <Link href="/">
            <a data-page="home">
              <Image
                src={logoImage}
                alt="Logo Image"
                loading="eager"
                height={50}
                width={50}
                objectFit="cover"
                className={"h-auto"}
              />
            </a>
          </Link>
        </div>

        <div className={"flex w-1/2 justify-around items-center"}>
          <a
            className={"invisible md:visible hover:text-secondary"}
            href="#aboutMe"
          >
            About Me
          </a>
          <a
            className={"invisible md:visible hover:text-secondary"}
            href="#projects"
          >
            Projects
          </a>
          <a className={`hover:text-secondary active`} href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <Contact />
    </>
  );
}
