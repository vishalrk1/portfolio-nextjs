import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id='about' className="flex flex-col justify-center bg-secondary w-full px-4 lg:px-60 py-8">
      <h1 className="font-semibold text-2xl md:text-3xl font-poppins">About Me</h1>
      <p className="font-normal font-poppins text-sm md:text-lg text-white mt-3">
        Hi, my name is Vishal Karangale, i am a Fullstack web developer, Mobile
        developer and AI enthusiast. I jhave honed my skills in Web and AI
        Development. Here are the major skiills i have.
      </p>
      <div className="flex mt-5 gap-4 items-center mr-6">
        <h1 className="font-semibold font-poppins text-6xl md:text-8xl text-primary">
          {"1+"}
        </h1>
        <p className="font-normal font-poppins text-sm md:text-xl text-white">
          Years of experience. in building mobile, web apps and AI based
          solutions, while ensuring a seamless experience for end users.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
