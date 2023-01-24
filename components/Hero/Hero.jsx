import Image from "next/image";
import Link from "next/link";
import joshua from "../../assets/joshua.png";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

const Hero = () => {
  //bg-custom-default-bg
  return (
    <div className="flex gap-24 xl:px-60 lg:px-14 px-9 w-full flex-col ">
      <div className=" pt-20 flex flex-col gap-12 w-full">
        <button className="p-2 rounded-sm bg-custom-green font-black w-48">
          Full-Stack Developer
        </button>
        <h2 className="text-white text-6xl xl:text-8xl lg:text-7xl font-extrabold">
          Talk is Cheap.
          <br /> Look at the code
        </h2>
        <p className="text-gray-400 text-2xl font-robotomono">
          I develop beautiful web apps.
          <br /> I write{" "}
          <span className="text-custom-green mr-2">clean code</span>
          and I love my work!
        </p>
        <Link
          href="https://www.linkedin.com/in/joshua-wanjugu-77b08316b/"
          className="underline text-3xl text-custom-green"
        >
          Let's Chat
        </Link>
      </div>
      <div className="bg-custom-dark-bg-2 bg-opacity-40 mt-16 lg:grid lg:grid-cols-4 gap-3  ">
        {/* <Image
          src={joshua}
          alt="joshua wanjugu"
          className="filter grayscale absolute top-60 opacity-70 "
        /> */}

        <div className="text-red-400 text-6xl shadow-2xl bg-gray-300 h-16 ">
          <AiOutlineHtml5 />
        </div>
        <div className="text-blue-400 text-6xl shadow-2xl bg-gray-300 h-16 ">
          <TbBrandCss3 />
        </div>
        <div className="text-custom-green text-6xl shadow-2xl bg-gray-300 h-16 ">
          <TbBrandJavascript />
        </div>
        <div className="text-custom-green text-6xl  shadow-2xl bg-gray-300 h-16">
          <FaReact className=" " />
        </div>
        <div className="text-blue-400 text-6xl">
          <SiTailwindcss />
        </div>

        <div className="text-custom-green text-6xl">
          <SiExpress />
        </div>
        <div className="text-custom-green text-6xl">
          <FaNodeJs />
        </div>
        <div className="text-yellow-300 text-6xl">
          <SiFirebase />
        </div>
      </div>
    </div>
  );
};
export default Hero;
