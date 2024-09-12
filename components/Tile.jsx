import { motion } from "framer-motion"

const Tile = ({isGlitchy}) => {
    return (
        <motion.div
            whileHover={{
                zIndex: 0,
                backgroundColor: "#2D9EE066",
            }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
            // className="aspect-square bg-neutral-950 hover:border-[#2D9EE0]"
            className={`aspect-square z-[0]  ${isGlitchy ? 'bg-[#2D9EE0]/10' : ''}`}
   
        
        />
    )
}
export default Tile