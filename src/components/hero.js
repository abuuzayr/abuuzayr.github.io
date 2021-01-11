import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900 dark:text-gray-300 leading-10 sm:leading-normal">
            Hi! 👋🏼 I&apos;m Muhammad Fawwaz,&nbsp;
            <br className="hidden lg:inline-block" />
            a full stack 🍔 developer&nbsp;
            <br className="hidden lg:inline-block" />
            with experience in&nbsp;
            <br className="hidden lg:inline-block" />
            tech 🔧 and finance 💸
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
