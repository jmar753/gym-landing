import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const cardOptions = [
    {value:"LOCATIONS", passage:"With 16 locations and counting, our network of clubs is one of the fastest growing in the country. See what we have to offer in your area."},
    {value:"WELLNESS", passage:"At BROVATI, we can help with our hostilic approach to health and fitness. Gain a deeper sense of well being and satisfaction with our specially-designed classes led by progressional instructors in our inviting, inspiring, boutique-style studios."},
    {value:"AMENITIES", passage:"From the moment you step inside, you'll see BROVATI is clearly different from other clubs. Premium amenities, cutting-edge equipment, inspiring spaces and a spa-like atmosphere await you."},
    {value:"CLASSES", passage:"We offer the widest selection of class options with up to 180 group fitness classes every week! All included with your membership."},
    {value:"TRAINING", passage:"Looking for one-on-one guidance and motivation? Let one of our Certified Personal Trainers design a fitness program specifically tailored to your needs and preferences."},
    {value:"MEMBERSHIP", passage:"Health and fitness should be an enjoyable experience. Our membership options give you the flexibility that works for your individual schedule, budget and above all, fitness goals."},
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
      <div className=" min-h-screen text-center border-b-0 w-4/5 m-auto">
        <h1 className="text-3xl text-slate-500 font-light -mb-1">The Brovati</h1>
        <h1 className="text-6xl text-sky-400 font-semibold">Experience</h1>
        {/* Grid for Cards */}
        <div className="flex justify-center p-20">
          <div className="h-[500px]">
            <div className=" w-[300px] shadow-xl">
              <div className="bg-sky-400 h-[200px] text-left"></div>
              <div className="p-7">
                <h1 className="tracking-wide text-left font-bold text-sky-400 text-2xl">LOCATIONS</h1>
                <p className="text-left py-7">With 16 locations and counting, our network of clubs is one of the fastest growing in the country. See what we have to offer in your area.</p>
                <p className="text-left">Find a Club -</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
