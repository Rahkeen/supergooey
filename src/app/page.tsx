import Image from "next/image";
import { Unbounded} from "next/font/google";

const unbounded = Unbounded({
   subsets: ["latin"],
})

const size = 44

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen items-center text-black">
      <section className="flex flex-row justify-center items-center gap-2 mt-8">
        <Image src="/sg-icon.svg" alt="supergooey icon" width={size} height={size}/>
        <h3 className={`text-3xl font-bold`}>Supergooey</h3>
      </section>
      <p>by <span className="font-semibold">Rikin</span></p>
    </main>
  );
}