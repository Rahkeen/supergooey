import Image from "next/image";
import {Unbounded} from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
})

const projects = [
  {
    id: 1,
    title: "Pinterest",
    url: "https://utfs.io/f/10f85e3f-6eff-4cd5-a68c-6ed65f0ad651-m63q.png"
  },
  {
    id: 2,
    title: "Hello Weather",
    url: "https://utfs.io/f/7897d38c-6c7b-4569-b4bc-0553d09549fc-ptdbt3.png"
  },
  {
    id: 3,
    title: "Hydro Homie",
    url: "https://utfs.io/f/c5d3650f-299a-4a89-9199-667faad08fb1-rileit.png"
  },
  {
    id: 4,
    title: "Sundial",
    url: "https://utfs.io/f/9781393a-94ab-4036-8cf2-b2ca45f11899-uplhdw.png"
  },
]

export default function HomePage() {

  const size = 44
  return (
    <main className="flex flex-col min-h-svh max-w-[440px] items-center m-auto text-white gap-16">
      <section className="w-full flex flex-row justify-start items-center gap-2 mt-8">
        <Image className="" src="/sg-icon-white.svg" alt="supergooey icon" width={size} height={size}/>
      </section>
      <section className="w-full flex flex-col gap-4">
        <h1 className="w-full text-left text-3xl">Building Android apps that look and feel <strong>Magical</strong></h1>
        <p className="w-full text-left text-lg text-gray-500 font-normal leading-tight">Tired of hearing <em>“Android
          app when???”</em> Let’s create a
          visually stunning Android experience together at a <span
            className="text-white font-semibold">fraction</span> of the cost of a full-time developer.</p>
        <div className="flex flex-row gap-3 items-center">
          <a className="no-underline bg-white rounded text-black font-medium p-2 pl-4 pr-4" href="">Let’s build</a>
          <a href="">Schedule a call</a>
        </div>
      </section>
      <div className="w-3/4 ml-auto mr-auto block border-[1px] border-white"/>
      <section className="w-full flex flex-row gap-4 items-center">
        <Image src="/profile-pic.jpg" alt="a handsome fellow" width={60} height={60} style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "4px",
        }}/>
        <p className="flex-grow text-lg leading-tight text-gray-500"><span className="text-white font-semibold">Hey, I’m Rikin.</span> I
          run Supergooey, which is a <em>micro-studio</em> (aka just me) that builds fun and whimsical mobile apps and courses.
        </p>
      </section>
      <section className="w-full grid grid-cols-2 gap-1">
        <h2 className="text-lg font-bold col-span-2">/projects</h2>
        <p className="text-gray-500 col-span-2 mb-2">Things I’ve built or worked on</p>
        {
          projects.map((project) => (
            <div key={project.id} className="h-[118px] flex flex-row bg-gray-900 rounded-xl">
              <p className="flex-grow self-end m-2">{project.title}</p>
              <div className="flex-grow h-full overflow-hidden">
                <img src={project.url} alt={project.title} className={
                  `w-[112px] h-[212px] relative left-1/4 top-1/4 bg-black border-2 border-black rounded-xl rotate-[6deg]`
                }/>
              </div>
            </div>
          ))
        }
      </section>
      <section className="w-full flex flex-col mb-10">
        <h2 className="text-lg font-bold">/misc</h2>
        <p className="text-gray-500">Other things I’m up to</p>
        <a href="https://shadercourse.framer.website" className="text-white mt-2">Shader Course</a>
        <a href="https://www.youtube.com/@rikinmarfatia" className="text-white">Youtube</a>
      </section>
    </main>
  );
}