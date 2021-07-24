import { useEffect, useState } from "react";
import SpiltText from "./SplitText";
import Image from "next/image";
import logoImage from "../../public/Aadarsha-Logo.png";

function Splash({ children }: any) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return !loading ? (
    children
  ) : (
    <div className={"w-screen h-screen bg-primary"}>
      <div className="w-screen h-screen bg-background-pattern mix-blend-color-burn  absolute"></div>
      <div className="w-screen h-screen text-fontColor flex flex-col items-center justify-center font-logo md:text-9xl tracking-widest splashScreenText text-4xl">
        <div className="animate-pulse ">
          <Image
            src={logoImage}
            alt="Logo Image"
            loading="eager"
            height={150}
            width={150}
            objectFit="cover"
            className={""}
          />
        </div>
        <div className="">
          <SpiltText copy={"AADARSHA"} role={"heading"} />
        </div>
      </div>
    </div>
  );
}

export default Splash;
