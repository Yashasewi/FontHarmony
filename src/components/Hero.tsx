import Nav from "./nav/Nav";
import { motion, useScroll, useSpring } from "framer-motion";

function Hero() {
  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div className="">
      <motion.div
        className="progress-bar"
        style={{ scaleX, backgroundColor: "GhostWhite" }}
      />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="min-h-screen min-w-full background flex gap-y-8 flex-col justify-center  items-center"
      >
        <Nav />
        <motion.h1
          variants={variants2}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[16rem]"
        >
          FONTHARMONY
        </motion.h1>
        <motion.div
          style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
          className=" text-xs py-10"
          variants={variants2}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="tracking-tighter">
            <p className="text-center">
              All fonts used are available for free on{" "}
              <a
                className="text-fuchsia-800 hover:text-fuchsia-600"
                href="https://www.google.com/fonts"
                target="_blank"
              >
                Google Fonts
              </a>{" "}
              or elsewhere on the interwebs. Ipsums found via{" "}
              <a
                className="text-fuchsia-800 hover:text-fuchsia-600"
                href="http://meettheipsums.com/"
                target="_blank"
              >
                meettheipsums.com
              </a>
              . This site was inspired by{" "}
              <a
                className="text-fuchsia-800 hover:text-fuchsia-600"
                href="http://bueltge.de/free-web-font-combinations/"
                target="_blank"
              >
                this,{" "}
              </a>
              <a
                className="text-fuchsia-800 hover:text-fuchsia-600"
                href="http://bchiang7.github.io/fontipsums/"
                target="_blank"
              >
                this
              </a>
              , and{" "}
              <a
                className="text-fuchsia-800 hover:text-fuchsia-600"
                href="http://femmebot.github.io/google-type/"
                target="_blank"
              >
                this
              </a>
              . Click the text examples to get the typeface!
            </p>
          </div>
          <div className="text-center p-10 py-0 text-xs">
            <p>
              Maintained by{" "}
              <a
                className="px-1 text-fuchsia-800 hover:text-fuchsia-600"
                href="https/github.com/yashasewi"
                target="_blank"
              >
                Yashasewi Singh
              </a>
              Fork this repo on{" "}
              <a
                className="py-1 text-fuchsia-800 hover:text-fuchsia-600"
                href="https/github.com/yashasewi"
                target="_blank"
              >
                Github
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
