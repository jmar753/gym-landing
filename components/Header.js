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
        {value:"Locations", route:"/Locations"},
        {value:"Amenities", route:"/Amenities"},
        {value:"Group Fitness", route:"/Group"},
        {value:"Training", route:"/Training"},
        {value:"Membership", route:"/Membership"},
    ]

    return(
        <div className="bg-neutral-900 text-white w-full flex items-center justify-between h-20 sticky top-0 z-40 text-base py-2 px-2 md:px-11 md:shadow-md">
            {check ? 
            <>
                <div className="bg-neutral-800 w-screen h-screen absolute left-0 top-0 opacity-40 md:hidden"></div>
                <div className="text-base text-left absolute left-0 top-0 z-10 w-3/4 p-6 h-screen divide-y divide-neutral-200 bg-white opacity-100 md:hidden" ref={newRef}>
                    {navOptions.map((item, index) => (
                        <button className="text-left text-neutral-900 w-full py-3 pr-3 my-1" onClick={() => {setCheck(false)}} key={index}>
                                {item.value}
                        </button>
                    ))}
                </div> 
            </>
            :
                null
            }

            <div className="hover:cursor-default flex justify-center items-center">
                Brovati Athletics
            </div>
            <div className="hidden md:flex gap-10 justify-around">
                {navOptions.map((item, index) => (
                        <button className="hover:cursor-pointer transition px-1 duration-200 -my-1 hover:text-emerald-400" key={item.value}>
                            {item.value}
                        </button>
                ))}
            </div>

            <button className="flex text-sky-500 border-sky-500 border px-10 h-10 justify-center items-center">
                join
            </button>
        </div>
    )
}