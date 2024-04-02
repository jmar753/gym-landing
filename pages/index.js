import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const cardOptions1 = [
    {value:"LOCATIONS", passage:"With 16 locations and counting, our network of clubs is one of the fastest growing in the country. See what we have to offer in your area."},
    {value:"WELLNESS", passage:"At BROVATI, we can help with our hostilic approach to health and fitness. Gain a deeper sense of well being and satisfaction with our specially-designed classes led by progressional instructors in our inviting, inspiring, boutique-style studios."},
    {value:"AMENITIES", passage:"From the moment you step inside, you'll see BROVATI is clearly different from other clubs. Premium amenities, cutting-edge equipment, inspiring spaces and a spa-like atmosphere await you."},
  ] 

  const cardOptions2 = [
    {value:"CLASSES", passage:"We offer the widest selection of class options with up to 180 group fitness classes every week! All included with your membership."},
    {value:"TRAINING", passage:"Looking for one-on-one guidance and motivation? Let one of our Certified Personal Trainers design a fitness program specifically tailored to your needs and preferences."},
    {value:"MEMBERSHIP", passage:"Health and fitness should be an enjoyable experience. Our membership options give you the flexibility that works for your individual schedule, budget and above all, fitness goals."},
  ] 
  return (
    <div className="">

      {/*Carousel 1*/}
      <div className="min-h-screen w-full bg-black flex justify-center items-center text-white">
        <div className="grid grid-cols-2">
          {/* Left Side Desktop */}
          <div className="px-10 space-y-5">

            <h1 className="text-6xl font-semibold">Do What <span className="text-sky-400">Motivates</span> You</h1>
            <p>Here at Brovati, we strive to see the best version of you. Our team will be here for you no matter what your goals at the gym are. Let’s get moving!</p>

            <div className="flex justify-evenly items-center">
              <button className="bg-sky-400 text-2xl w-44">Get Moving</button>
              <button className="bg-sky-400 text-2xl w-44">Get Moving</button>
            </div>
          </div>

          {/* Right Side Desktop */}



        </div>
      </div>
    </div>
  );
}
