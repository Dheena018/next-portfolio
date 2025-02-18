import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

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
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <Image
        src={assets.new_img}
        alt="first_img"
        className="rounded-full w-32"
      />
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center text-center gap-2 text-xl md:text-2xl mb-3"
      >
        Hi I'm Dheena
        <Image src={assets.hand_icon} alt="" className="w-6"></Image>
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] "
      >
        Frontend Web Developer based in India.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        Passionate Software Engineer with expertise in Next.js. Committed to
        creating engaging and user-friendly web applications, I'm dedicated to
        continuous learning and excited about the opportunities that lie ahead.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href={"#contact"}
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4"></Image>
        </motion.a>
        <motion.a
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href={"#sample"}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
        >
          my resume
          <Image src={assets.download_icon} alt="" className="w-4"></Image>
        </motion.a>
      </div>
    </motion.div>
  );
}
