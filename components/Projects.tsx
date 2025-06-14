import AppwriteImage from '@/public/assets/images/Appwrite.png';
import BusinessImage from '@/public/assets/images/business.png';
import PortfolioImage from '@/public/assets/images/portfolio.png';
import ZabaniAppImage from '@/public/assets/images/ZbApp.png';
import ZabaniWebsiteImage from '@/public/assets/images/ZbWeb.png';
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
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={BusinessImage}
                alt="Business Website"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Next.js Business Website</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Business website made using Next.js in React. Uses Framer Motion for animations and Tailwind for styling.{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next.js</li>
              <li>React.js</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>Framer Motion</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/HumayunHM/StealthCuztomzSite"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://stealth-cuztomz-site.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={ZabaniWebsiteImage}
                alt="Zabani"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Responsive Landing Page</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Fully responsive landing page website for my startup Zabani. Styled using Tailwind.{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>Formspree</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/HumayunHM/ZbNewWb"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://zabani.pk"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={ZabaniAppImage}
                alt="Zabani App"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">English Learning App</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              An English Learning app made in React-Native with Expo, reanimated.{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React-Native</li>
              <li>Expo</li>
              <li>Reanimated</li>
            </ul>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;