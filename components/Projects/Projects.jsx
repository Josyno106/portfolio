import Image from "next/image";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { VscArrowSmallRight } from "react-icons/vsc";

import thumbnail from "../../assets/thumbnail.png";
import Link from "next/link";
import SingleProject from "./SingleProject";
// import { ProjectsData } from "./Data";
const Projects = () => {
  const iconsList = [
    <FaReact className="text-3xl animate-customspin text-blue-400" />,
    <SiFirebase className="text-3xl text-yellow-300  " />,
    <SiTailwindcss className="text-3xl text-blue-400  " />,
  ];

  const ProjectsData = [
    {
      title: "Fullstack Chat Web App",
      iconList: [
        <FaReact className="text-3xl animate-customspin text-blue-400" />,
        <SiFirebase className="text-3xl text-yellow-300  " />,
        <SiTailwindcss className="text-3xl text-blue-400  " />,
      ],

      description: `Chate is a fullstack real-time web chat app. I combined the power of Firebase Firestore real-time 
      capabilities to bring the app to life.`,
      thumbnail: thumbnail,
      link: "https://github.com/Josyno106",
    },
    {
      title: "Fullstack Chat Web App",
      iconList: [
        <FaReact className="text-3xl animate-customspin text-blue-400" />,
        <SiFirebase className="text-3xl text-yellow-300  " />,
        <SiTailwindcss className="text-3xl text-blue-400  " />,
      ],

      description: `Chate is a fullstack real-time web chat app. I combined the power of Firebase Firestore real-time 
      capabilities to bring the app to life.`,
      thumbnail: thumbnail,
      link: "https://github.com/Josyno106",
    },
    {
      title: "Fullstack Chat Web App",
      iconList: [
        <FaReact className="text-3xl animate-customspin text-blue-400" />,
        <SiFirebase className="text-3xl text-yellow-300  " />,
        <SiTailwindcss className="text-3xl text-blue-400  " />,
      ],

      description: `Chate is a fullstack real-time web chat app. I combined the power of Firebase Firestore real-time 
      capabilities to bring the app to life.`,
      thumbnail: thumbnail,
      link: "https://github.com/Josyno106",
    },
    {
      title: "Fullstack Chat Web App",
      iconList: [
        <FaReact className="text-3xl animate-customspin text-blue-400" />,
        <SiFirebase className="text-3xl text-yellow-300  " />,
        <SiTailwindcss className="text-3xl text-blue-400  " />,
      ],

      description: `Chate is a fullstack real-time web chat app. I combined the power of Firebase Firestore real-time 
      capabilities to bring the app to life.`,
      thumbnail: thumbnail,
      link: "https://github.com/Josyno106",
    },
  ];

  return (
    <div className="text-white py-20 xl:px-60 text-center lg:px-14  ">
      <h2 className="lg:text-7xl xg:text-8xl font-black mb-12 text-5xl ">
        Comprehensive <span className="text-custom-green">Real-World </span>
        Applications
      </h2>
      <p className="text-2xl font-robotomono text-gray-400 px-48 lg:px-18 hidden md:block lg:block xl:block">
        These are just some of the projects, among many, that I have developed
        in the past. All of the projects are{" "}
        <span className="text-custom-green">open-source</span> and you can{" "}
        <span className="text-custom-green mr-3">Fork</span>
        them on Github.
      </p>
      <div className="mt-16 mx-8 xl:mx-[12rem]  grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6 lg:mx-[6rem] md:mx-[5rem]">
        {ProjectsData.map((project, index) => (
          <SingleProject
            key={project.link}
            title={project.title}
            iconList={project.iconList}
            description={project.description}
            thumbnail={project.thumbnail}
            to={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
