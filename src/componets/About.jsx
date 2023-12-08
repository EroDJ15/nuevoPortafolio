import React from "react";

const About = () => {
  return (
    <div
      data-aos="fade-right"
      id="about"
      className="px-6 lg:px-60"
      style={{ position: "relative", top: "-80px", left: "5px" }}
    >
      <div>
        <h1 className="text-[38px] px-2  text-white font-semibold mb-6 leading-normal pt-4 lg:text-center justify-items-center lg:items-center">
          <span className="text-fuchsia-500">About</span> Me
        </h1>
      </div>
      <div
        data-aos="fade-down"
        className="h-min flex-grow lg:items-center items text-white lg:py-0 text-center gap-6 lg-tex-center flex lg:flex-row flex-co-reverse justify-left lg:gap-32 items-center"
      >
        <img
          src="/public/image/19362653-768x432.jpg"
          className="rounded-full border-4 p-1 border-primary img_glow left-1 lg:relative justify-self-center w-36 h-36 lg:w-52 lg:h-52 -top-7" // Agregada la clase mt-4 para ajustar la posición vertical
          alt=""
        />
        <div data-aos="fade-left">
          <h2 className="space-x-2 text-lg font-serif mb-20 leading-normal lg:py-1 flex-col lg:items-start text-white lg:px-2 px-6 py-6 text-left gap-5 lg-tex-center flex lg:flex-row flex-co-reverse justify-between lg:gap-28 items-center">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            delectus, ea aliquam itaque iusto illo quasi facere adipisci
            voluptates nobis, quisquam quos! Iste molestiae quod, officiis animi
            officia nihil aliquid.
          </h2>
          <div className="flex space-x-0">
            <button className="transition ease-in-out duration-300  relative -top-14 overflow-hidden glow uppercase text-lg hover:bg-fuchsia-800 rounded-lg py-3 px-6 text-white border-2 font-semibold justify-center left-2">
              H/V
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
