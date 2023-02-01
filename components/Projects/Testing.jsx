import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { VscArrowSmallRight } from "react-icons/vsc";
const Testing = () => {
  const array = ["Joshua", "Wanjugu", "Mary", "Lovely", "Focusly"];

  const projectsData = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
    <>
      <div>
        {projectsData.map((item, index) => {
          <p key={`${index}+${item}`}>{item.title}</p>;
        })}
      </div>
    </>
  );
};

export default Testing;
