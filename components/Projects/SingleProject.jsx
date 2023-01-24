import { VscArrowSmallRight } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";

const SingleProject = ({ title, iconList, description, thumbnail, to }) => {
  return (
    <div className=" h-128 bg-custom-gray  relative group overflow-hidden rounded-2xl cursor-pointer">
      <Image src={thumbnail} alt="project image" className=" h-3/5  " />

      <div className="bg-custom-gray h-2/5 w-full absolute top-72 p-6">
        <h3 className="text-3xl font-bold my-6 lg:my-8 xg:my-8 text-custom-white">
          {title}
        </h3>
        <div className="flex justify-center gap-4 text-red-50 ">
          {iconList.map((icon) => icon)}
        </div>
      </div>

      <div
        className="bg-custom-gray lg:h-80 xg:h-80 w-full absolute  duration-[800ms] top-[30rem]  
            group-hover:top-32
            group-hover:transition-top
            group-hover:duration-[800ms]
            px-10
          "
      >
        <h3 className="text-3xl font-bold my-6 text-custom-white text-left ">
          {title}
        </h3>
        <p className="text-gray-400 text-xl text-left mb-7 lg:mb-9 xl:mb-9 ">
          {description}
        </p>

        <Link
          target="_blank"
          href="https://github.com/Josyno106"
          className=" flex justify-center lg:justify-center xl:justify-center mb-2 xl:mb-0 lg:mb-0 "
        >
          <div className="bg-custom-green text-custom-gray font-bold w-40 py-2 px-1 text-[1.1em] rounded-full flex items-center justify-center  ">
            <p className=" mb-1">view more</p>
            <VscArrowSmallRight className="text-4xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleProject;
