import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-full">

      {/*IMAGE 1*/}
      <div className=" w-full h-80 bg-neutral-200 flex justify-center items-center">
        <div className="grid grid-row-2">

          <h1 className="text-6xl font-semibold">Do What <span className="text-sky-400">Motivates</span> You</h1>
          
          <div className="py-10"></div>

          <div className="flex justify-center items-center">
            <button className="bg-sky-400 text-2xl w-44">Get Moving</button>
          </div>
        </div>
      </div>

      {/* Safety Protocols */}
      <div className=" h-[calc(1vh)] text-center py-20 mx-3.5">
        <h1 className="text-3xl text-slate-500 font-light">Safety Protocols</h1>
        <h1 className="text-6xl text-sky-400 font-semibold">Brovati Standards</h1>
        <p>We've always worked hard to ensure the highest level of safety and cleanliness in our fitness clubs. Now, you'll see even more of this as we adopt several new and enhanced cleaning procedures and safety measures.</p>
        <button className="text-white bg-neutral-900 px-20 h-10">View Safety Protocols</button>
      </div>
    </div>
  );
}
