import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const InstagramCard = ({ data }) => {
  return (
    <div style={{ perspective: 400 }}>
      <motion.div
        initial={{ rotateY: -180, opacity: 0.4 }}
        animate={{
          rotateY: 0,
          opacity: 1,
          transition: { duration: 0.3 },
        }}
        style={{
          transformStyle: "preserve-3d",
          // transformOrigin: 'right'
        }}
        //   className="w-[40%]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="shadow-xl z-[-10] transition-all duration-500  mt-24 p-12 min-w-[500px] max-w-[570px] min-h-[80vh] lg:min-h-[75vh] text-black relative text-center  bg-white rounded-[24px] "
        >
          <div className="z-[-1] h-[400px] w-[400px] bg-gradient-to-br from-pink-500 to-yellow-500 top-[100px] rounded-full absolute blur-[70px]" />
          <Image
            src={data.logo}
            alt={"cc"}
            height={250}
            width={250}
            className="z-[0] mx-auto bg-black border aspect-square object-contain rounded-full"
          />
          <div className=" shadow-xl -mt-6 rounded-xl text-xl  px-3 py-2 border -rotate-[5deg] bg-white z-[9999] w-fit mx-auto">
            <span className="bg-gradient-to-b from-yellow-500 to-pink-500 bg-clip-text text-transparent font-bold">
              @{" "}
            </span>
            {data.instahandle}
          </div>
          <h1 className="font-bold mt-12 text-xl">{data.title}</h1>
          <h1 className="mt-4">{data.description}</h1>

          <h1 className="w-fit mx-auto font-semibold mt-6 bg-gradient-to-br  from-orange-500 to-pink-500 text-white px-2 drop-shadow-lg py-1 rounded-lg">
            Coordinators
          </h1>
          <h1 className="mt-1">
            {data.coordinators[0].coordinator1},{" "}
            {data.coordinators[0].coordinator2}
          </h1>
          <div className="grid grid-cols-2 justify-center items-center absolute left-0 p-12 bottom-0 gap-4 mx-auto w-full">
            <Link href={data.social[0].instagram} target="_blank">
              <div
                className={` border shadow-xl px-4 py-2  flex gap-2 items-center hover:underline mx-auto rounded-xl ${
                  data.social[0].instagram == "" ? "opacity-50" : ""
                }`}
              >
                <img src="/socials/instagram.png" className="h-4 w-4 " />{" "}
                Instagram
              </div>
            </Link>
            <Link href={data.social[0].linkedin} target="_blank">
              <div
                className={` border shadow-xl px-4 py-2  hover:underline flex gap-2 items-center  mx-auto rounded-xl ${
                  data.social[0].linkedin == "" ? "opacity-50" : ""
                }`}
              >
                <img src="/socials/linkedin.png" className="h-4 w-4 " />{" "}
                Linkedin
              </div>
            </Link>
            <Link href={data.social[0].discord} target="_blank">
              <div
                className={`border shadow-xl px-4 py-2 hover:underline flex gap-2 items-center  mx-auto rounded-xl ${
                  data.social[0].discord == "" ? "opacity-50" : ""
                }`}
              >
                <img src="/socials/discord.png" className="h-4 w-4 " /> Discord
              </div>
            </Link>

            <Link href={data.social[0].linktree} target="_blank">
              <div
                className={` border shadow-xl px-4 py-2  hover:underline flex gap-2 items-center  mx-auto rounded-xl ${
                  data.social[0].linktree == "" ? "opacity-50" : ""
                }`}
              >
                <img src="/socials/link.png" className="h-4 w-4 " /> Linktree
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InstagramCard;
