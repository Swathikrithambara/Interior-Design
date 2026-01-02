import { motion } from "framer-motion";
import { fadeUp } from "../animation";

export default function ServiceCard({ title, desc, number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-white border border-gray-200 p-10 overflow-hidden"
    >
      {/* Top number / icon */}
      <span className="text-5xl font-bold text-gray-200 group-hover:text-black transition">
        {number}
      </span>

      {/* Accent line */}
      <span className="absolute left-0 top-0 h-full w-1 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

      <h3 className="text-xl font-semibold mt-6 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
