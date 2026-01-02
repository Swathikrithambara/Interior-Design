import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-32">

        {/* PAGE TITLE */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Comprehensive interior, architectural, and design solutions.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {services.map((service, index) => {
            const isTextFirst = index % 2 === 0;

            return (
              <div key={service.id} className="contents">
                
                {isTextFirst && (
                  <ServiceText service={service} />
                )}

                <ServiceImage image={service.image} />

                {!isTextFirst && (
                  <ServiceText service={service} />
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
// HELPER COMPONENTS (stay in same file)

function ServiceText({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black border border-white/10 p-10 flex flex-col justify-between min-h-[350px] group"
    >
      <div>
        <span className="text-gray-400 text-sm">{service.id}</span>
        <h3 className="text-2xl font-semibold mt-4 leading-snug">
          {service.title}
        </h3>
      </div>

      <div className="flex items-center justify-between mt-10">
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl">
          {service.icon}
        </div>

        <span className="text-xl transform group-hover:translate-x-2 transition">
          →
        </span>
      </div>
    </motion.div>
  );
}

function ServiceImage({ image }) {
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="overflow-hidden min-h-[350px]"
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover hover:scale-105 transition duration-700"
      />
    </motion.div>
  );
}
