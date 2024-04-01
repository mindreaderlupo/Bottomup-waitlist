import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-yellow-400 relative overflow-hidden">
          <Image
            src="/banner.png"
            alt="Banner to show what its about"
            fill
            className="object-contain   object-bottom"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
          Seamless <span className='text-yellow-500'>Interaction -</span> <br/>
          Limitless <span className='text-yellow-500'>Insight</span> 
          </h1>
          <h2 className="font-semibold tracking-tight text-zinc-900 text-2xl leading-tight md:text-3xl max-w-lg">
          Revolutionize feedback collection with our one-click solutions!

          </h2>
          <p className="text-gray-500">
            Join the waitlist to be notified when our service is available!
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
