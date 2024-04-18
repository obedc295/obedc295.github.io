/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot, s as spreadAttributes } from '../astro_CBy0f11C.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<astro data-astro-cid-3ef6ksr2> <header id="navbar" class="fixed top-0 left-0 z-10 h-15 w-full shadow-md" data-astro-cid-3ef6ksr2> <div class="flex justify-center items-center py-5 xl:w-[1120px] mx-auto" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <nav class="flex flex-row gap-x-6 bg-gray-800 w-200 h-10 items-center p-y2 rounded-full" data-astro-cid-3ef6ksr2> <a href="#home" data-astro-cid-3ef6ksr2>‎ Inicio</a> <a href="#proyectos" data-astro-cid-3ef6ksr2>Proyectos</a> <a href="#acercade" data-astro-cid-3ef6ksr2>Acerca de mí</a> <a href="mailto:obedco295@gmail.com" data-astro-cid-3ef6ksr2>Contacto‎ ‎ ‎ </a> </nav> </div> </header> </astro> `;
}, "C:/Users/Obed/portfolio-obed/src/components/Header.astro", void 0);

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-neutral-950"> <header> ${renderComponent($$result, "Header", $$Header, {})} </header> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Obed/portfolio-obed/src/layouts/Layout.astro", void 0);

const $$Astro$8 = createAstro();
const $$Githubicon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Githubicon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} class="rounded-full border-white flex justify-center items-center bg-white/5 hover:scale-110 hover:bg-white/10" viewBox="0 0 256 250" width="35" height="35" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "C:/Users/Obed/portfolio-obed/src/components/icons/githubicon.astro", void 0);

const $$Astro$7 = createAstro();
const $$Gmailicon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Gmailicon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rounded-full border-white flex justify-center items-center bg-white/5 hover:scale-110 hover:bg-white/10"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6"></path><path d="M3 7l9 6l9 -6"></path><path d="M20 21l2 -2l-2 -2"></path><path d="M17 17l-2 2l2 2"></path></svg>`;
}, "C:/Users/Obed/portfolio-obed/src/components/icons/Gmailicon.astro", void 0);

const $$Astro$6 = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead()}<a class="rounded-full border-white flex justify-center items-center
 gap-x-2 py-2 px-1" target="blank"${spreadAttributes(Astro2.props)} rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Obed/portfolio-obed/src/components/icons/Social.astro", void 0);

const $$Astro$5 = createAstro();
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute("w-full mx-auto lg:w-{740px}", "class")}></section</section>`;
}, "C:/Users/Obed/portfolio-obed/src/components/icons/SectionContainer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Tailwind = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg>`;
}, "C:/Users/Obed/portfolio-obed/src/components/icons/Tailwind.astro", void 0);

const $$Astro$3 = createAstro();
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Proyectos;
  const TAGS = {
    TAILWIND: {
      name: "Tailwind",
      class: "text-[#73bcf6] hover:bg-gradient-to-r from-[#73bcf6] to-[#38bdf8] hover:text-white transition-colors duration-300 ease-in-out",
      icon: $$Tailwind
    }
  };
  const PROJECTS = [
    {
      title: "Replica P\xE1gina Web de Nike",
      description: "Una p\xE1gina que imita el estilo del encabezado, carrusel y Footer de la p\xE1gina oficial de Nike",
      link: "https://github.com/obedc295/LAB-INTROSISTEMAS/tree/main/Nike%20Tarea%20%233",
      image: "/projects/svgl2.png",
      tags: [TAGS.TAILWIND]
    }
  ];
  return renderTemplate`${PROJECTS.map(
    ({ image, title, description, tags }) => renderTemplate`${maybeRenderHead()}<div class="border border-gray-300 rounded-lg p-4 mb-4"><article><h3 class="text-2xl font-semibold text-red-300 mb-2">${title}</h3><p class="text-1xl mb-4 text-pretty">${description}</p><ul class="flex gap-x-4 flex-row">${tags.map((tag) => renderTemplate`<span class="rounded-full border-white flex justify-center items-center h-10 w-full">${renderComponent($$result, "tag.icon", tag.icon, {})}‎
${tag.name}</span>`)}</ul><img class="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mb-6"${addAttribute(image, "src")} alt="Captura de Pantalla del Proyecto"><a href="https://github.com/obedc295/LAB-INTROSISTEMAS/tree/main/Nike%20Tarea%20%233" class="rounded-full border-white flex justify-center items-center bg-white/5 hover:scale-110 hover:bg-white/10 h-10 w-full mb-6 py-6">${renderComponent($$result, "GithubIcon", $$Githubicon, {})}‎ Código de Nike</a></article></div>`
  )}<div class="border border-gray-300 rounded-lg p-4 mb-6"> <article class="flex flex-col items-center"> <h3 class="text-2xl font-semibold text-red-300 mb-2">Replica Página Web Namecheap</h3> <p class="text-1xl mb-4 text-pretty">Una página que imita 3 secciones de la página de Namecheap, Encabezado, Funciones y Complementos</p> <div class="flex items-center mb-6"> <!-- Contenedor para el logo de Tailwind y el texto --> <div class="rounded-full border-white h-10 w-15 mr-2"> <!-- Estilo del logo de Tailwind --> ${renderComponent($$result, "Tailwind", $$Tailwind, {}, { "default": ($$result2) => renderTemplate`Tailwind` })} </div> <p class="text-base font-medium">Tailwind</p> <!-- Texto "Tailwind" --> </div> <img class="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mb-6" src="/projects/svgl1.png" alt="Captura de Pantalla del Proyecto"> <a href="https://github.com/obedc295/LAB-INTROSISTEMAS/tree/main/Namecheap%20Tarea%20%234" class="rounded-full border-white flex justify-center items-center bg-white/5 hover:scale-110 hover:bg-white/10 h-10 w-full mb-6 py-6">${renderComponent($$result, "GithubIcon", $$Githubicon, {})}‎  Código de Namecheap</a> </article> </div>`;
}, "C:/Users/Obed/portfolio-obed/src/components/icons/Proyectos.astro", void 0);

const $$Astro$2 = createAstro();
const $$Acerca = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Acerca;
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center items-center w-120 mx-auto"> <div class="text-1xl font-semibold mb-4 mr-8"> <span>Mi nombre es </span> <span class="text-red-400">Obed Eliel Castellanos Oseguera</span> <span> y soy de </span> <span class="text-red-400">Moroceli, El Paraíso.</span>
Actualmente tengo
<span class="text-red-400">17 años.</span>
Me gusta ayudar a los demás en temas que manejo.
      Estoy estudiando la carrera de
<span class="text-red-400">ingeniería en sistemas</span>
en la Universidad Nacional Autónoma de Honduras
<span class="text-red-400">(UNAH).</span> </div> <img class="rounded-full h-32 w-32 mb-8 transition-transform transform hover:scale-105" src="/src/components/IMG/perfil3.png" alt="Obed Foto"> </section>`;
}, "C:/Users/Obed/portfolio-obed/src/components/IMG/Acerca.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="flex justify-center items-center w-120 mx-auto">
© 2024 Obed Castellanos 20241002161
</footer>`;
}, "C:/Users/Obed/portfolio-obed/src/components/icons/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Obed Castellanos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pt-24 mt-16 bg-#1A1D36" id="home"> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-22" })} <section class="w-full mx-auto lg:w-[540px] p-y44"> <img class="rounded-full w-19 h-20 mb-4" src="/src/components/IMG/perfil3.png" alt="Obed Foto"> <h1 class=" text-4xl text-white font-bold flex justify-start flex-row pb-4 typed-text">
Obed Castellanos.
</h1> <h2 class=" text-2xl pb-4"> <span>Soy estudiante de </span><span class="text-red-200/90 font-bold">Ingenieria en Sistemas en la UNAH. </span><span>Soy de</span><span class="text-red-200/90 font-bold"> El Paraiso, Honduras.</span></h2> <ul> <li> <nav class="flex gap-x-4 "> <div class="rounded-full border-white flex justify-center items-center bg-white/5 hover:scale-110 hover:bg-white/10 h-10 w-17"> ${renderComponent($$result2, "Social", $$Social, { "href": "https://github.com/obedc295" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Githubicon", $$Githubicon, {})}Github
` })} </div> <div class="rounded-full border-white flex justify-center items-center bg-white/5 hover:scale-110 hover:bg-white/10 h-10 w-17"> ${renderComponent($$result2, "Social", $$Social, { "href": "mailto:obedco295@gmail.com" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Gmailicon", $$Gmailicon, {})}obedco295@gmail.com
` })} </div> </nav> </li> </ul> <section id="proyectos" class="justify-center items-center  bg-transparent mt-80 mb-2"> <h2 class="font-bold text-3xl text-yellow-200"> <span class="material-symbols-outlined 10px">code</span> Proyectos
</h2> ${renderComponent($$result2, "Proyectos", $$Proyectos, {})} </section> <section id="acercade" class="justify-center items-center bg-transparent "> <h2 class="font-bold text-3xl text-yellow-200"> <span class="material-symbols-outlined">
emoji_people
</span>Acerca de Mi
</h2> ${renderComponent($$result2, "Acerca", $$Acerca, {})} </section> ${renderComponent($$result2, "Footer", $$Footer, {})} </section> </main> ` })}`;
}, "C:/Users/Obed/portfolio-obed/src/pages/index.astro", void 0);

const $$file = "C:/Users/Obed/portfolio-obed/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
