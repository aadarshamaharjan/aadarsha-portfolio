import React from "react";
import Typed from "typed.js";
import Image from "next/image";
import profilePic from "../public/me.jpg";
export default function Introduction() {
  const el = React.useRef<any>("");
  const typed = React.useRef<Typed>();
  React.useEffect(() => {
    const options = {
      strings: [
        "My name is <strong class='blink-text'>Aadarsha Maharjan &#128075; &#128075;</strong>",
        "I am a <strong class='blink-text'>Student &#128214;</strong>",
        "I am a <strong class='blink-text'>Web Developer &#127760;</strong>",
        "I am an <strong class='blink-text'>Enthusiast &#128373;</strong>",
        "I am a <strong class='blink-text'>Software Developer &#128378;</strong>",
        "I am a <strong class='blink-text'>Full Stack Developer &#128170;</strong>",
        "I am a <strong class='blink-text'>Java Developer &#128187;</strong>",
        "I am an <strong class='blink-text'>Investor &#128176;</strong>",
        "I am a <strong class='blink-text'>Gamer &#127918;</strong>",
        "I am a <strong class='blink-text'>Dreamer &#128564;</strong>",
      ],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
      autoInsertCss: true,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      if (typed.current) typed.current.destroy();
    };
  }, []);
  return (
    <div
      className={`flex flex-col-reverse md:flex-row h-screen w-screen md:px-32 px-8 md:pt-20 pt-44 justify-around`}
      id="introductionSection"
    >
      <div className={`flex flex-col items-start justify-center`}>
        <div className={"introText"}>
          <div className={"font-hello text-6xl md:text-9xl"}>Hello,</div>
          <div
            className={`flex text-2xl md:text-3xl md:h-10 h-16 md:my-6 my-8`}
          >
            <span ref={el}></span>
          </div>
        </div>
        <div className="text-justify">
          Hey, I am self-motivated and hard-working person with a keen sense on
          learning more by doing more. I am passionate about developing new and
          innovative solutions that can deliver impactful results.
        </div>
      </div>
      <div className={`w-full flex items-center justify-center`}>
        <div className="relative flex items-center justify-center h-full w-96">
          <div className="md:block absolute md:right-0 md:top-48 hidden">
            <svg
              width="120"
              height="60"
              viewBox="0 0 125 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124.49 0.881401L62.6087 108.063L0.727259 0.881395L124.49 0.881401Z"
                fill="#FC5130"
              />
            </svg>
          </div>
          <div className="md:block absolute md:left-0 md:top-52 z-10 hidden">
            <svg
              width="88"
              height="75"
              viewBox="0 0 88 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M44 0L87.3013 75H0.69873L44 0Z" fill="#B4656F" />
            </svg>
          </div>
          <div className="md:block absolute md:right-0 md:bottom-44 z-10 hidden">
            <svg
              width="103"
              height="103"
              viewBox="0 0 103 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M98.8741 2C89.8785 23.7173 76.6935 43.4501 60.0718 60.0718C43.4501 76.6935 23.7173 89.8785 2 98.8741"
                stroke="#00ADB5"
                strokeWidth="8"
              />
            </svg>
          </div>
          <div className="md:block absolute md:left-4 md:bottom-48 z-10 hidden">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="28" r="28" fill="#C2BBF0" />
            </svg>
          </div>
          <Image
            src={profilePic}
            alt="Picture of the author"
            loading="eager"
            className={"rounded-full"}
          />
        </div>
      </div>
    </div>
  );
}
