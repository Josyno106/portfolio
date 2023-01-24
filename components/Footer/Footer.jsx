import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="p-6 bg-custom-dark-bg-3
     text-custom-white flex items-center justify-center
        text-xl group cursor-pointer
     "
    >
      <h3>
        Created by{" "}
        <span className="group-hover:text-custom-green group-hover:font-bold ">
          <Link href="https://github.com/Josyno106">Joshua Wanjugu</Link>
        </span>{" "}
        with ❤️{" "}
      </h3>
    </div>
  );
};

export default Footer;
