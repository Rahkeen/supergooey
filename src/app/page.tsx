import Image from "next/image";
import {Unbounded} from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
})

export default function HomePage() {

  const size = 44
  return (
    <main className="flex flex-col min-h-svh max-w-[440px] items-center m-auto text-white gap-16">
      <section className="w-full flex flex-row justify-start items-center gap-2 mt-8">
        <Image className="" src="/sg-icon-white.svg" alt="supergooey icon" width={size} height={size}/>
      </section>
      <section className="w-full flex flex-col gap-4">
        <h1 className="w-full text-left text-3xl">Building Android apps that look and feel <strong>Magical</strong></h1>
        <p className="w-full text-left text-lg text-gray-500 font-normal leading-tight">Tired of hearing <em>“Android app when???”</em> Let’s create a
          visually stunning Android experience together at a <span className="text-white font-semibold">fraction</span> of the cost of a full-time developer.</p>
        <div className="flex flex-row gap-3 items-center">
          <a className="no-underline bg-white rounded text-black font-medium p-2 pl-4 pr-4" href="">Let’s build</a>
          <a href="">Schedule a call</a>
        </div>
      </section>
      <div className="w-3/4 ml-auto mr-auto block border-[1px] border-white" />
      <section className="w-full flex flex-row gap-4 items-center">
        <Image src="/profile-pic.jpg" alt="a handsome fellow" width={60} height={60} style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "4px",
        }} />
        <p className="flex-grow text-lg leading-tight text-gray-500"><span className="text-white font-semibold">Hey, I’m Rikin.</span> I run Supergooey, which is a micro-studio (aka just me) that builds fun and whimsical mobile apps and courses.</p>
      </section>
      <section className="w-full grid grid-cols-2 gap-1">
        <div className="h-[118px] bg-blue-300"></div>
        <div className="h-[118px] bg-blue-300"></div>
        <div className="h-[118px] bg-blue-300"></div>
        <div className="h-[118px] bg-blue-300"></div>
      </section>
      <section className="w-full flex flex-col">
        <h2 className="text-lg font-bold">/misc</h2>
        <p className="text-gray-500">Other things I’m up to</p>
        <a href="" className="text-white no-underline mt-2">Shader Course</a>
        <a href="" className="text-white no-underline">Youtube</a>
      </section>
    </main>
  );
}