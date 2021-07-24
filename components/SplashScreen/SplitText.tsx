import React from "react";
const SpiltText = (props: any) => {
  return (
    <div aria-label={props.copy} role={props.role} key="spanKey">
      {props.copy.split("").map((char: any, index: any) => {
        const styles = "animation-delay: " + (0.5 + index / 10) + "s;";
        return (
          <span key={index}>
            <span aria-hidden="true" key={index} className={"mySplashText"}>
              {char}
            </span>
            <style jsx>{`
              .mySplashText {
                ${styles}
              }
            `}</style>
          </span>
        );
      })}
    </div>
  );
};

export default SpiltText;
