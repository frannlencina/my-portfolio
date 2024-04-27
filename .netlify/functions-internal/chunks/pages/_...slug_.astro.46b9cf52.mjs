/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, f as renderHead, e as renderSlot, d as renderComponent, m as maybeRenderHead } from '../astro.83711a80.mjs';
import 'html-escaper';
import { $ as $$Footer } from './404.astro.548df610.mjs';
/* empty css                               */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                         *//* empty css                         */
const $$Astro$1 = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Post;
  const { title, description, image } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<meta name="Portfolio" content="Author:Francisco Lencina, Category: Portfolio, Blog. Resume: Esta es la pagina de mis proyectos donde muestro con que estan echos a detalle.">
		<meta name="theme-color" content="#317EFB">
		<link rel="icon" type="image/svg+xml" href="/favicon.png">
		<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">
		<meta property="og:title"${addAttribute(title, "content")}>
		<meta property="og:description"${addAttribute(description, "content")}>
		<meta property="og:image"${addAttribute(image, "content")}>
		<meta property="og:image:secure_url"${addAttribute(image, "content")}> 
		<meta property="og:image:type" content="image/png"> 
		<meta property="og:image:width" content="400"> 
		<meta property="og:image:height" content="300">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		
		<link rel="manifest" href="../../manifest.json">
		
		<title>${title}</title>
	${renderHead()}</head>
	<body class="duration-300">
		
		<main class="container max-w-3xl mx-auto h-fit dark:text-white">
			${renderSlot($$result, $$slots["default"])}
		</main>
		${renderComponent($$result, "Footer", $$Footer, {})}
	
</body></html>`;
}, "D:/Programming/portfolio/src/layouts/Post.astro", void 0);

const jsonData = [
	{
		slug: "SafePvP",
		id: 1,
		title: "SafePvP",
		about: "SafePvP fue la pagina oficial de un exitoso servidor de el videojuego Minecraft. Donde los usuarios podian entrar a dicha pagina, copiar la ip, ver la cantidad de jugadores online a tiempo real, ver las reglas o simplemente dirigirse a la tienda del servidor. Tambien habian secciones donde se mostraban las modalidades actuales de la temporada e informarse sobre estas.",
		techSpecs: "La pagina fue creada con React Js como Framework de JS, con Tailwind CSS como Framework de CSS,y con herramienta de compilacion ViteJS. Fue planteada, diseñada y estructurada antes de dicho desarrollo en Figma. La pagina tambien trabajaba con una API donde se extraian los datos para ver a tiempo real la cantidad de jugadores online.",
		description: "SafePvP es la pagina oficial sobre un ex servidor de un videojuego.",
		website: "https://safepvp.000webhostapp.com/",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1684342116/safepvp_hero_yey4jm.jpg",
		screens: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684342116/safepvp_hero_yey4jm.jpg",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684342035/safepvp_hero3_nqnudb.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684342035/safepvp_404_rq2czh.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684342035/safepvp_hero2_rut2qo.png"
		],
		tech: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/javascript-logo_drsvuc.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/reactjs-logo_kqlp9a.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/tailwindcss-logo_wjbz44.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/vitejs-logo_fl5rei.png"
		],
		language: "/"
	},
	{
		slug: "Keyswh",
		id: 2,
		title: "Keyswh",
		about: "Keyswh actualmente esta en beta, fue creada con el objetivo de crear una comunidad de personas con el amor hacia el mismo hobbie. La pagina cuenta con secciones, Guias y News.Yo controlare desde una Admin Dashboard con un Login exclusivos para Administradores estas secciones. Donde se podran agregar posts, eliminar y editar.",
		techSpecs: "La aplicacion esta dividida en dos partes, el FrontEnd y el BackEnd. En el FrontEnd la pagina fue desarrollada con ReactJS como framework de JS y Tailwind CSS como framework de CSS. En el BackEnd la pagina esta Desarrollada con Node Js y Express para administrar las peticiones al servidor y Mongoose para conectar a MongoDb. Tambien utilize herramientas como JSONWebToken para la authenticacion y el Middelware en las peticiones de las rutas.",
		description: "Keyswh es una comunidad de teclados mecanicos, donde podras ver guias, noticias e informarte sobre estos.",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1684339873/keyswh_hero_jsiwtm.png",
		screens: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684339873/keyswh_hero_jsiwtm.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684339873/keyswh_adminlogin_dy3nih.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684339872/keyswh_adminposts_qepoec.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684339873/keyswh_hero2_csh58v.png"
		],
		website: "https://keyswh.com/",
		tech: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/javascript-logo_drsvuc.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/reactjs-logo_kqlp9a.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/nodejs-logo_m4lwq7.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/mongodb-logo_qowzyr.png"
		],
		language: "/"
	},
	{
		slug: "LetrasSinFiltro",
		id: 3,
		title: "LetrasSinFiltro",
		about: "LetrasSinFiltro es una plataforma que te ayuda a decir lo que sientes de forma original y creativa. Elige entre miles de frases e indirectas para cada situación: amor, desamor, amistad, trabajo.",
		techSpecs: "La pagina esta creada con NextJS como framework FrontEnd utilizando TailwindCSS para los estilos. Tambien usa Mongoose y MongoDb para la conexion y manejo de la base de datos.",
		description: "LetrasSinFiltro es un generador de frases con IA y futura Red Social enfocada en el desahogo en frases e indirectas.",
		website: "https://www.letrassinfiltro.site/",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png",
		screens: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-not-found_ou9lfl.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-login_ols9ya.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-aboutus_x6grgb.png"
		],
		tech: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1708982259/png-transparent-next-js-hd-logo_qgsmxy.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1697775481/tslogo_akmllv.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/tailwindcss-logo_wjbz44.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/mongodb-logo_qowzyr.png"
		],
		language: "/"
	}
];

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const pages = jsonData;
  const { slug } = Astro2.params;
  const page = pages.find((page2) => page2.slug === slug);
  if (!page)
    return Astro2.redirect("/404");
  const { title, description, image, about, techSpecs, website, screens, tech } = page;
  return renderTemplate`${renderComponent($$result, "Post", $$Post, { "title": "Francisco Lencina : Project", "description": description, "image": image, "class": "astro-5UQ7EVLV" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<h1 class="text-center font-bold text-6xl pt-12 text-[#3450A2] dark:text-[#3450A2] astro-5UQ7EVLV">
        ${title}
    </h1>

    <div class="flex mx-auto max-w-2xl justify-between items-center px-5 astro-5UQ7EVLV">
        <a class="flex gap-4 mt-4 py-2 rounded font-medium text-lg text-black dark:text-white hover:translate-x-[-8px] transition-all duration-200 dark:hover:translate-x-[-8px] opacity-80 hover:opacity-100 astro-5UQ7EVLV" href="/">
            <i class="ri-arrow-left-line astro-5UQ7EVLV"></i> Volver al inicio</a>

        <a class="flex gap-2 mt-4 px-5 py-2 font-medium text-black text-[var(--blue-dark)] rounded-md transition-all duration-200 opacity-70 hover:translate-x-[8px] hover:opacity-100 dark:text-white astro-5UQ7EVLV"${addAttribute(website, "href")} target="__blank">
            <i class="ri-movie-line dark:text-white astro-5UQ7EVLV"></i>
            <span class="inline-block h-[2] min-h-[1em] w-0.5 self-stretch bg-[var(--blue-dark)] astro-5UQ7EVLV">
            </span> Ver Demo
        </a>
    </div>

    <section class="p-10 mx-auto max-w-3xl astro-5UQ7EVLV">
        <h2 class="text-start font-bold text-4xl text-[#3450A2] dark:text-[#3450A2] astro-5UQ7EVLV">
            Sobre el Proyecto
        </h2>
        <p class="text-start p-6 text-xl sm:text-2xl dark:text-white opacity-80 astro-5UQ7EVLV">
            ${about}
        </p>
    </section>
    <section class="p-10 mx-auto max-w-3xl text-start astro-5UQ7EVLV">
        <!--  <Titles title="Tecnologias"/> -->
        <h2 class="text-start font-bold text-4xl text-[#3450A2] dark:text-[#3450A2] astro-5UQ7EVLV">
            Tecnologias
        </h2>
        <p class="text-start text-xl sm:text-2xl dark:text-white p-6 opacity-80 astro-5UQ7EVLV">
            ${techSpecs}
        </p>
    </section>
    <section class="flex justify-center items-center gap-6 pt-8 pb-12 astro-5UQ7EVLV">
        ${tech.map((url) => renderTemplate`<img class="mt-8 mx-2 h-12 astro-5UQ7EVLV"${addAttribute(url, "src")} alt="Tecnologia utilizada.">`)}
    </section>
` })}`;
}, "D:/Programming/portfolio/src/pages/projects/[...slug].astro", void 0);

const $$file = "D:/Programming/portfolio/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

export { $$ as default, $$file as file, $$url as url };
