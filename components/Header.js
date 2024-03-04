import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { useState, useRef, useEffect} from "react";

export default function Header(){
    const [check, setCheck] = useState(false)
    const newRef = useRef(null)
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick)
        };
    });

    const handleOutsideClick = (e) => {
        if (newRef.current && !newRef.current.contains(e.target)) {
            setCheck(false)
        }
    };

    const navOptions = [
        {value:"Home", route:"#Home"},
        {value:"Timeline", route:"#Timeline"},
        {value:"Portfolio", route:"#Portfolio"},
    ]

    const navOptionsMobile = [
        {value:"Home", route:"#Home"},
        {value:"About", route:"#About"},
        {value:"Timeline", route:"#Timeline"},
        {value:"Portfolio", route:"#Portfolio"},
    ]

    return(
        <div className="bg-white w-full flex justify-between font-semibold h-11 fixed top-0 z-40 text-xl py-2 px-2 md:px-11 md:shadow-md">
            {check ? 
            <>
                <div className="bg-neutral-800 w-screen h-screen absolute left-0 top-0 opacity-40 md:hidden"></div>
                <div className="text-base text-left absolute left-0 top-0 z-10 w-3/4 p-6 h-screen divide-y divide-neutral-200 bg-white opacity-100 md:hidden" ref={newRef}>
                    {navOptionsMobile.map((item, index) => (
                        <button className="text-left text-neutral-900 w-full py-3 pr-3  text-2xl my-1" onClick={() => {setCheck(false)}} key={index}>
                            <Link href={item.route} key={index}>
                                {item.value}
                            </Link>
                        </button>
                    ))}
                </div> 
            </>
            :
                null
            }

            <div className="text-2xl hover:cursor-default flex">
                <div className="md:hidden flex justify-center items-center rounded-lg px-0.5 hover:cursor-pointer hover:bg-gray-300 mr-4">
                    <HiMenu className="block md:hidden text-2xl" onClick={() => {setCheck(true)}}>

                    </HiMenu>
                </div>
                <Link href="#Home">
                    <div className="-my-1">
                        Jr.<span className="text-emerald-400">dev</span>
                    </div>
                </Link>
            </div>
            <div className="hidden md:flex gap-10 justify-around">
                {navOptions.map((item, index) => (
                    <Link href={item.route} key={index}>
                        <button className="hover:cursor-pointer transition px-1 duration-200 -my-1 hover:text-emerald-400" key={item.value}>
                            {item.value}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}