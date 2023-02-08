import { useState } from "react";

const Introduction = () => {
  const descriptions = [
    {
      title: "I'm Joshua Wanjugu",
      body: `I'm a mid level fullstack developer with over 3 years experience. Let's just say I'm a simple guy who loves coding. 
      I create solutions for businesses and people. Continuous learning 
      is a dominant driving force for me. I believe skills are 
      sharpened through mistakes, corrections and continuous practice. 
      `,
      emoji: "👋",
    },
    {
      title: "My Front-End Tech Stack",
      body: `I'm interested in writing testable and reusable UI code for various web apps.
           I particularly like React, Vue or Ember Js. 

           I have been coding in Reactjs for the last 3 years and at least 1 year for both Vue 
           and Ember. During this time, I worked as sole developer at Exellent JOZMAJ Solutions Ltd.
           I've also worked as freelance developer for various clients.
      `,
      emoji: "💡",
    },
    {
      title: "My Back-End Tech Stack",
      body: `I'm interested in creating Serverless apps, thanks to backend tools
      like Firebase, AppWrite, Supabase and Aws Amplify. 
      Apart from these technologies, I'm conversant with Nodejs and Express for 
      Javascript Backend. I can also use Ruby on Rails or Php (and SQL) for the backend Scripting.

      However, almost all my projects have the serverless technologies for the backend side to
      keep things simple and speed up the development process.
      `,
      emoji: "💡",
    },
  ];

  const [currentItem, setCurrentItem] = useState(descriptions[0]);
  return (
    <>
      <div className=" bg-custom-dark-bg-3 mt-24 sm:hidden  flex px-60 lg:px-14 xl:px-60">
        <div className="w-1/3 pt-16 flex flex-col gap-2 mb-24">
          {/* this holds the left menu */}

          <div
            className=" bg-custom-gray p-8 rounded-md cursor-pointer hover:scale-105 hover:transition
         hover:shadow-md hover:shadow-custom-green"
            onClick={() => {
              setCurrentItem(descriptions[0]);
            }}
          >
            <h3 className="text-custom-green text-3xl ">About me</h3>
            <p className="text-white font-robotomono text-xl">
              Learn more about me...
            </p>
          </div>
          <div
            className=" bg-custom-gray p-8 rounded-md cursor-pointer 
        hover:scale-105 hover:transition hover:shadow-md
         hover:shadow-custom-green "
            onClick={() => {
              setCurrentItem(descriptions[1]);
            }}
          >
            <h3 className="text-custom-green text-3xl ">
              Front-End Development
            </h3>
            <p className="text-white font-robotomono text-xl">
              Click to learn more..
            </p>
          </div>
          <div
            className=" bg-custom-gray p-8 rounded-md cursor-pointer
         hover:scale-105 hover:transition hover:shadow-md
          hover:shadow-custom-green "
            onClick={() => {
              setCurrentItem(descriptions[2]);
            }}
          >
            <h3 className="text-custom-green text-3xl ">
              Back-End Development
            </h3>
            <p className="text-white font-robotomono text-xl">
              Click to learn more...
            </p>
          </div>
        </div>
        <div className="ml-32 w-2/5">
          {/* this is where various descriptions go */}
          <h3 className="text-custom-green text-3xl font-bold pt-16 pb-6 ">
            {currentItem.emoji} {currentItem.title}
          </h3>
          <p className="text-gray-400 font-robotomono text-xl">
            {currentItem.body}
          </p>
        </div>
      </div>

      {/* show this smaller part of introduction on the smaller screens */}

      <div className="bg-custom-dark-bg-3 px-8 py-16 md:hidden lg:hidden xl:hidden">
        {/* this is where various descriptions go */}
        <h3 className="text-custom-green text-3xl font-bold  pb-6 ">
          {currentItem.emoji} {currentItem.title}
        </h3>
        <p className="text-gray-400 font-robotomono text-xl">
          {currentItem.body}
        </p>
      </div>
    </>
  );
};

export default Introduction;
