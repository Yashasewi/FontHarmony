import { motion } from "framer-motion";
export default function Nav() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, delay: 0.8 }}
      style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
      className="  flex justify-between min-w-full pr-32 pl-32"
    >
      <h5 className=" uppercase font-light tracking-tight ">
        Discover Font Harmony
      </h5>
      <h5 className="uppercase  font-light tracking-tight "> 2023</h5>
    </motion.div>
  );
}
