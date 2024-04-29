import Image from "next/image";
import { Unbounded} from "next/font/google";

const unbounded = Unbounded({
   subsets: ["latin"],
})

export default function HomePage() {
  const size = 44
  return (
    <main className="flex flex-col max-w-[800px] items-center m-auto text-black">
      <section className="w-full flex flex-row justify-center items-center gap-2 mt-8">
        <Image src="/sg-icon.svg" alt="supergooey icon" width={size} height={size}/>
      </section>
      <section className="w-full flex flex-col p-16 gap-12">
        <h1 className="font-medium text-6xl text-center">Android apps that look and feel <span
          className={"font-bold"}>Magical</span></h1>
        <p className="text-center text-xl">Tired of hearing <em>"Android when???"</em><br/>  Let's work together!</p>
      </section>
    </main>
  );
}

// interesting way to just add a lil spacer
function Spacer() {
  return (
    <div className="h-10"/>
  )
}