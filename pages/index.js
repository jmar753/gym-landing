import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const navOptions = [
    {value:"Locations", route:"/Locations"},
    {value:"Amenities", route:"/Amenities"},
    {value:"Group Fitness", route:"/Group"},
    {value:"Training", route:"/Training"},
    {value:"Membership", route:"/Membership"},
  ] 
  return (
    <div className="">

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
      <div className="min-h-[calc()] text-center py-20 flex justify-center items-center">
        <div className="w-4/5">
          <h1 className="text-3xl text-slate-500 font-light -mb-1">Safety Protocols</h1>
          <h1 className="text-6xl text-sky-400 font-semibold">Brovati Standards</h1>
          <p className="py-10">We've always worked hard to ensure the highest level of safety and cleanliness in our fitness clubs. Now, you'll see even more of this as we adopt several new and enhanced cleaning procedures and safety measures.</p>
          <button className="text-white bg-neutral-900 px-20 h-10">View Safety Protocols</button>
        </div>
      </div>

      {/* Why Brovati  */}
      <div className=" min-h-screen flex justify-center items-center text-center py-20 w-full">
        <div className="border-solid border-b border-neutral-500 pb-14 w-4/5">
          <div className="flex items-center justify-center">
            <div className="w-3/4 bg-sky-400 h-[400px]"></div>
          </div>
          <h1 className="text-3xl text-sky-400 font-semibold mt-20">Why Brovati?</h1>
          <p className="py-10">We believe you deserve an elevated fitness experience where a healthier life and your personal best are all within reach. We are fitness that puts you first.</p>
          <button className="text-slate-500 h-10 underline">Learn More</button>
        </div>
      </div>

      {/* Brovati Experience */}
      <div className=" min-h-screen text-center border-b-0">
        <h1 className="text-3xl text-slate-500 font-light -mb-1">The Brovati</h1>
        <h1 className="text-6xl text-sky-400 font-semibold">Experience</h1>
        <h1 className="text-3xl text-slate-500 font-light mt-20">Why Brovati?</h1>
        <p className="py-10">We believe you deserve an elevated fitness experience where a healthier life and your personal best are all within reach. We are fitness that puts you first.</p>
        <button className="text-slate-500 h-10 underline">Learn More</button>
      </div>
    </div>
  );
}
