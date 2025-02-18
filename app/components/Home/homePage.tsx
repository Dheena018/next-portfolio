import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    // <div className="min-h-screen bg-gradient-to-r text-white flex flex-col justify-center items-center">
    //   <Head>
    //     <title>Dheena's Portfolio</title>
    //     <meta
    //       name="description"
    //       content="Dheena's personal portfolio showcasing projects"
    //     />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className="text-center">
    //     <h1 className="text-5xl font-bold mb-4 text-black">
    //       Hi, I'm <b className="text-blue-500">Dheena!</b>
    //     </h1>
    //     <p className="text-xl mb-8 text-gray-500">
    //       Passionate Software Engineer with expertise in Next.js. Committed to
    //       creating engaging and user-friendly web applications, I'm dedicated to
    //       continuous learning and excited about the opportunities that lie
    //       ahead.
    //     </p>
    //   </main>
    // </div>
    <div
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <h3 className="flex items-center text-center gap-2 text-xl md:text-2xl mb-3">
        Hi I'm Dheena{" "}
        <Image src={assets.hand_icon} alt="" className="w-6"></Image>
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] ">
        Frontend Web Developer based in India.
      </h1>
      <p className="max-w-2xl mx-auto">
        Passionate Software Engineer with expertise in Next.js. Committed to
        creating engaging and user-friendly web applications, I'm dedicated to
        continuous learning and excited about the opportunities that lie ahead.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link
          href={"#contact"}
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4"></Image>
        </Link>
        <Link
          href={"#sample"}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume{" "}
          <Image src={assets.download_icon} alt="" className="w-4"></Image>
        </Link>
      </div>
    </div>
  );
}
