import { motion } from "framer-motion"

const Tile = ({isGlitchy}) => {
    return (
        <motion.div
            whileHover={{
                zIndex: 3,
                backgroundColor: "#2D9EE0",
            }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
            // className="aspect-square bg-neutral-950 hover:border-[#2D9EE0]"
            className={`aspect-square  ${isGlitchy ? 'bg-[#2D9EE0]/10' : ''} transition duration-200`}
   
        
        />
    )
}
export default Tile