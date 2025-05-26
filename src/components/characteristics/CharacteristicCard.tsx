import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type CharacteristicCardProps = {
  image: string;
  alt: string;
  date: string;
  title: string;
  description: string;
  index: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export const CharacteristicCard = ({
  image,
  alt,
  date,
  title,
  description,
  index,
}: CharacteristicCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.article
      ref={ref}
      className="flex flex-col gap-4 rounded-lg shadow-md bg-white"
      role="region"
      aria-label={title}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        transition: { type: "spring", stiffness: 300 },
      }}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <time className="text-xs text-gray-400">{date}</time>
        <h3 className="text-lg font-semibold text-gray-800 mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </motion.article>
  );
};
