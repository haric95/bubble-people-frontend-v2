"use client";
import { SiteData } from "@/types";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import Markdown from "react-markdown";
import { Gallery } from "./components/Gallery";
import Image from "next/image";

type HomePageProps = { data: SiteData["home"] };

export const HomePageContent = ({ data }: HomePageProps) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div className="mb-8 md:mb-16 text-center whitespace-break-spaces text-shadow-2xl">
        <Markdown>{data.bio}</Markdown>
      </motion.div>

      <motion.div className="w-full md:w-full aspect-[1.77] mb-8 md:mb-16 custom-box-shadow">
        <Gallery images={data.gallery} />
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
          {data.upcoming.map((show, index) => (
            <div
              className={`flex flex-col md:flex-row mb-4 md:mb-4 justify-center items-center ${index !== data.upcoming.length - 1 ? "mb-4" : ""}`}
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
          {data.notable.map((work) => (
            <div
              className="w-full flex flex-col md:flex-row mb-8"
              key={work.title}
            >
              <div className="relative h-64 w-full md:w-1/3 mb-0 flex items-center justify-center overflow-hidden">
                <Image
                  src={work.image.url}
                  alt={work.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full text-left md:w-2/3 md:pl-4 md:text-right bg-[#000000cc] p-4">
                <h3 className="font-title font-weight-500 tracking-wider mb-4 text-md md:text-2xl heading-text-shadow">
                  {work.title}
                </h3>
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
          {data.past.map((show) => (
            <div className="w-full text-center mb-2" key={show.title}>
              <p>{show.title}</p>
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
        <div className="w-full flex justify-around h-32">
          {data.supporters.map((supporter) => (
            <div
              className="flex items-center justify-center w-auto relative"
              style={{ flex: "1" }}
              key={supporter.name}
            >
              <Image
                src={supporter.logo}
                alt={"logo"}
                className="w-auto object-scale-down"
                fill
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
