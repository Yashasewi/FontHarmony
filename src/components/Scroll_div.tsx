import { colors, fonts_Data } from "./util";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
export default function Scroll_div() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const ref = useRef(null);
  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{ scaleX, backgroundColor: "GhostWhite" }}
      />

      <div className="scroll_div  flex flex-col ">
        {colors.map((color, index) => (
          <div
            className="h-[100vh] container "
            key={index}
            style={{ backgroundColor: color }}
          >
            <div
              className="font-pair"
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
            >
              <p>
                <a href={fonts_Data[index]["font-1"].link}>
                  {fonts_Data[index]["font-1"].name}
                </a>{" "}
                ,{" "}
                <a href={fonts_Data[index]["font-2"].link}>
                  {fonts_Data[index]["font-2"].name}
                </a>
              </p>
            </div>
            <div className="text-wrapper">
              <h1
                className="uppercase"
                style={{ fontFamily: fonts_Data[index]["font-1"].name }}
              >
                {fonts_Data[index].Heading}
              </h1>
              <p
                className=" "
                style={{ fontFamily: fonts_Data[index]["font-2"].name }}
              >
                {fonts_Data[index].Body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
