import AppwriteImage from '@/public/assets/images/Appwrite.jpg';
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://nextamazon.reactbd.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={AppwriteImage}
                alt="Appwrite"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Appwrite Authentication App</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A login and signup system for your react-native app using 
              appwrite.{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React-Native</li>
              <li>Appwrite</li>
            </ul>
          </div>
        </div>
        {/* ============ project One End here ================== */}
      </div>
    </section>
  );
};

export default Projects;