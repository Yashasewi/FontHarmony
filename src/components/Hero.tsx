import Nav from "./nav/Nav";
import { motion } from "framer-motion";
function Hero() {
  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div>
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[16rem]"
        >
          FONTHARMONY
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
