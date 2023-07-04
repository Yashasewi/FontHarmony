import { colors, fonts_Data } from "./util";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Scroll_div() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  
  return (
    <motion.div className="scroll_div min-w-[100vw] flex">
      {colors.map((color, index) => (
        <div
          className="min-w-[100vw] container"
          key={index}
          style={{ backgroundColor: color, height: "100%" }}
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
    </motion.div>
  );
}
