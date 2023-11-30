import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="px-6 lg:px-60"
      style={{ position: "relative", top: "-80px", left: "5px" }}
    >
      <div className="h-min flex-grow lg:items-center items text-white lg:py-0 text-center gap-6 lg-tex-center flex lg:flex-row flex-co-reverse justify-left lg:gap-28 items-center">
        <img
          src="/public/image/19362653-768x432.jpg"
          className="rounded-full border-4 p-1 border-primary img_glow left-1 lg:relative justify-self-center w-36 h-36 lg:w-56 lg:h-56" // Aquí usas las clases de Tailwind para definir el ancho y el alto de la imagen según el breakpoint
          alt=""
        />
        <h2 className="text-lg font-serif mb-8 leading-normal lg:py-0 flex-col lg:items-start text-white lg:px-10 px-6 py-6 text-left gap-5 lg-tex-center flex lg:flex-row flex-co-reverse justify-between lg:gap-28 items-center">
          {" "}
          // Aquí usas la clase text-lg para definir el tamaño de la fuente
          según el breakpoint Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Accusamus, delectus, ea aliquam itaque iusto illo quasi facere
          adipisci voluptates nobis, quisquam quos! Iste molestiae quod,
          officiis animi officia nihil aliquid.
        </h2>
      </div>
    </div>
  );
};
export default About;
