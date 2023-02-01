import Image from "next/image";
import { FaBeer } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const linkStyles = `hover:text-custom-green hover:border-b-2 hover:border-custom-green 
            border-b-2 border-transparent cursor-pointer text-white`;
  const menu = [
    {
      label: "About me ",
      to: "/",
    },
    {
      label: "Services ",
      to: "/",
    },
    {
      label: "Works",
      to: "/",
    },
    {
      label: "Courses",
      to: "/",
    },
  ];
  //bg-custom-default-bg
  return (
    <header className="flex justify-between  sm:px-16 lg:px-14 xl:px-60 py-8  md:px-8 mx-5  bg-custom-default-bg">
      <h1 className="text-2xl font-black text-custom-green ">
        Joshua <span className="font-normal text-white">Wanjugu</span>
      </h1>
      <nav className="  md:block xl:block lg:block sm:hidden hidden  ">
        <ul className="flex gap-12 xl:text-2xl lg:text-purple-400 font-poppins font-bold">
          {menu.map((item, index) => (
            <li
              key={index}
              className="hover:text-custom-green hover:border-b-2 hover:border-custom-green border-b-2 border-transparent cursor-pointer text-white"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <ul className="flex justify-center gap-6 pt-1 text-2xl">
          <li className="text-white hover:text-custom-green">
            <Link target="_blank" href="https://github.com/Josyno106">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/joshua-wanjugu-77b08316b/"
              target="_blank"
              className="text-white hover:text-custom-green"
            >
              <BsLinkedin />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="#"
              className="text-white hover:text-custom-green"
            >
              <MdEmail />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
