import React, {useState} from "react";
import SectionTitle from "./SectionTitle";
import Zabani from "./works/Zabani";
import Sabzland from "./works/Sabzland";


const Experience = () => {
    const [workZabani, setWorkZabani] = useState(true);
    const [workSabzland, setWorkSabzland] = useState(false);

    const handleZabani = () => {
        setWorkZabani(true);
        setWorkSabzland(false);
    };

    const handleSabzland = () => {
        setWorkZabani(false);
        setWorkSabzland(true);
    };

  return (
    <section 
        id="experience"
        className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
        <SectionTitle title="Where I have Worked" titleNo="02." />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
            <ul className="md:w-32 flex flex-col">
                <li 
                    onClick={handleZabani}
                    className={`${workZabani ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium `}
                >
                    Zabani
                </li>
                <li 
                    onClick={handleSabzland}
                    className={`${workSabzland ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium `}
                >
                    Sabzland
                </li>
            </ul>
            {workZabani && <Zabani />}
            {workSabzland && <Sabzland />}
        </div>
    </section>
  )
}

export default Experience