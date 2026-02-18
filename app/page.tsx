"use client";
import { Gallery } from "@/app/components/Gallery";
import { StrapiImage } from "@/types";
import { motion } from "motion/react";
import Link from "next/link";
import Markdown from "react-markdown";

type Show = { title: string; date: string; url: string };
const BIO = `# Domus sed suas aves

## Sum moenibus fluere tu

Lorem markdownum, liquitur adversi funere possidet ab passi nervoque haesit iam
dicta moratus corporis vagantem infames, in. Licuit spatium committere catenas
crudelis quia in hunc sui artus sub sono animi tenet, quater regia inpia.

Leto in horum, non Arcades iunget sol Themin [confugit
celer](#sum-moenibus-fluere-tu). Formidine toro; dum fulmine, instructa
**Cnosius** Canentem et tumulo Oete Athos tulit dea vir est init deum tinguet.


  `;
const UPCOMING_SHOWS: Show[] = [
  {
    title: "Live @ Taco Stand In Gabby's Yard",
    date: "2027-02-16T16:27:19.034Z",
    url: "https://bandcamp.com",
  },
  {
    title: "Live @ Madison Square Gardens",
    date: "2028-02-16T16:27:19.034Z",
    url: "https://bandcamp.com/",
  },
  {
    title: "Live @ GATE Presents: Bubble People 12h Live Set",
    date: "2029-02-16T16:27:19.034Z",
    url: "https://bandcamp.com//",
  },
];

type Work = { title: string; description: string; image: StrapiImage };
const NOTABLE_WORKS: Work[] = [
  {
    title: "Work 1",
    description: `Exire legebat dicta Polymestoris imbres crinem viri versus Rhesum, inmemor
blandis: ut aevum per bis. In decipiet Pallante toto paternum, **accingere
iussus deorum** servat; parat. Tentoria nostra quas successit veluti ipsa, caput
tamen, axe ferisne *iactat* in aure **incerto harenae**. Pectus sub fecit
conferre occuluere quid.`,
    image: { attributes: { url: "https://picsum.photos/640/400" } },
  },
  {
    title: "Work 2",
    description: `Exire legebat dicta Polymestoris imbres crinem viri versus Rhesum, inmemor
blandis: ut aevum per bis. In decipiet Pallante toto paternum, **accingere
iussus deorum** servat; parat. Tentoria nostra quas successit veluti ipsa, caput
tamen, axe ferisne *iactat* in aure **incerto harenae**. Pectus sub fecit
conferre occuluere quid.`,
    image: { attributes: { url: "https://picsum.photos/630/400" } },
  },
  {
    title: "Work 3",
    description: `Exire legebat dicta Polymestoris imbres crinem viri versus Rhesum, inmemor
blandis: ut aevum per bis. In decipiet Pallante toto paternum, **accingere
iussus deorum** servat; parat. Tentoria nostra quas successit veluti ipsa, caput
tamen, axe ferisne *iactat* in aure **incerto harenae**. Pectus sub fecit
conferre occuluere quid.`,
    image: { attributes: { url: "https://picsum.photos/620/400" } },
  },
];

const PAST_SHOWS = ["Live @...", "Live @ ...", "Live Live @ ......"];

type Supporter = { name: string; logo: string; link: string };
const SUPPORTERS: Supporter[] = [
  {
    name: "Sneaky Pete's",
    logo: "/images/sneaky-petes.png",
    link: "https://sneakypetes.co.uk/",
  },
  {
    name: "GATE",
    logo: "/images/GATE.webp",
    link: "https://gatheralltheelectronics.com",
  },

  {
    name: "CMN GND",
    logo: "/images/sneaky-petes.png",
    link: "https://example.co",
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <motion.div className="mb-8 md:mb-16 text-center whitespace-break-spaces text-shadow-2xl">
          <Markdown>{BIO}</Markdown>
        </motion.div>

        <motion.div className="w-full md:w-full aspect-[1.77] mb-8 md:mb-16 custom-box-shadow">
          <Gallery
            images={[
              {
                attributes: {
                  url: "https://picsum.photos/500/400",
                },
              },
              {
                attributes: {
                  url: "https://picsum.photos/640/400",
                },
              },
              {
                attributes: {
                  url: "https://picsum.photos/650/400",
                },
              },
              {
                attributes: {
                  url: "https://picsum.photos/680/400",
                },
              },
            ]}
          />
        </motion.div>

        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, translateY: 50, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, translateY: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="font-title mb-4 text-white text-lg md:text-xl heading-text-shadow">
            Coming Up
          </h1>
          <div className="w-full">
            {UPCOMING_SHOWS.map((show, index) => (
              <div
                className={`flex flex-col md:flex-row mb-4 md:mb-0 justify-center items-center ${index !== UPCOMING_SHOWS.length - 1 ? "mb-4" : ""}`}
                key={show.url}
              >
                <p className="mb-2 md:mb-0">
                  {show.title} -
                  <span className="font-extrabold">
                    {" "}
                    {new Date(show.date).toDateString()}{" "}
                    {new Date(show.date).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </p>
                <Link href={show.url} target="_blank" className="g">
                  <div className="mx-8 font-title text-sm border-2 border-white px-2 py-1 text-highlight-2 cursor-pointer hover:scale-105 transition-transform duration-500">
                    <p className="heading-text-shadow">INFO</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full mb-8 md:mb-16 text-center heading-text-shadow"
          initial={{ opacity: 0, translateY: 50, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, translateY: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1
            className="font-title mb-8 text-white text-lg md:text-xl heading-text-shadow"
            style={{}}
          >
            Notable Works
          </h1>
          <div className="w-full">
            {NOTABLE_WORKS.map((work) => (
              <div
                className="w-full flex flex-col md:flex-row mb-8"
                key={work.title}
              >
                <div className="w-full md:w-1/3 mb-2 md:mb-0 flex items-center justify-center overflow-hidden">
                  <img src={work.image.attributes.url} alt="image" />
                </div>
                <div className="w-full text-left md:w-2/3 md:pl-4 md:text-right">
                  <Markdown>{work.description}</Markdown>
                </div>
              </div>
            ))}
            <div className="" />
          </div>
        </motion.div>

        <motion.div
          className="w-full mb-8 md:mb-16 text-center"
          initial={{ opacity: 0, translateY: 50, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, translateY: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1
            className="font-title mb-8 text-white text-lg md:text-xl heading-text-shadow"
            style={{}}
          >
            Past Shows
          </h1>
          <div className="w-full text-center">
            {PAST_SHOWS.map((show) => (
              <div className="w-full text-center mb-2" key={show}>
                <p>{show}</p>
              </div>
            ))}
            <div className="" />
          </div>
        </motion.div>

        <motion.div
          className="w-full mb-8 md:mb-16 text-center"
          initial={{ opacity: 0, translateY: 50, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, translateY: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="font-title mb-8 text-white text-lg md:text-xl heading-text-shadow">
            Supporters
          </h1>
          <div className="w-full flex justify-around">
            {SUPPORTERS.map((supporter) => (
              <div
                className="h-32 flex items-center justify-center"
                key={supporter.name}
              >
                <img
                  src={supporter.logo}
                  className="grow-1 w-auto h-32 object-scale-down"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
