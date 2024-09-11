import Tile from "@/components/Tile";

export default function Team() {
    return (
        <>
            <div className="w-full min-h-screen relative">
                <div className="bg-gradient-to-b pointer-events-none  from-[#091E3A] z-[0] via-[#2F80ED] to-[#2D9EE0] w-[500px] h-[500px] blur-[2000px] absolute" />
                <div className="bg-gradient-to-b from-[#091E3A] z-[0] pointer-events-none to-[#2D9EE0]  right-0 -top-12 w-[500px] h-[500px] blur-[2000px] absolute" />
                <div className="bg-gradient-to-r from-[#091Eee] z-[0] pointer-events-none to-[#2D9EE0]  right-0 top-12 w-[500px] h-[500px] blur-[2000px] absolute" />
                <section className='w-full   grid grid-cols-20 h-screen overflow-y-clip'>
        {Array.from(Array(30 * 30), i => (
          <Tile key={i} />
        ))}
      </section>
            </div>
        </>
    )
}