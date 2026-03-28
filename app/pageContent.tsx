"use client";
import { SiteData } from "@/types";
// import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import Markdown from "react-markdown";
import { Gallery } from "./components/Gallery";

type HomePageProps = { data: SiteData["home"] };

export const HomePageContent = ({ data }: HomePageProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 md:mb-16 text-center whitespace-break-spaces text-shadow-2xl mix-blend-difference">
        <Markdown>{data.bio}</Markdown>
      </div>

      <div className="w-full md:w-full aspect-[1.77] mb-8 md:mb-16 custom-box-shadow">
        <Gallery images={data.gallery} />
      </div>

      <div
        className="text-center mb-8 md:mb-16 mix-blend-difference"
        // initial={{ opacity: 0, translateY: 50, filter: "blur(4px)" }}
        // whileInView={{ opacity: 1, translateY: 0, filter: "blur(0px)" }}
        // transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
      >
        <h1 className="font-title mb-4 text-white text-lg md:text-xl heading-text-shadow mix-blend-difference">
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
              <Link href={show.url} target="_blank" className="">
                <div className="mx-8 font-title text-sm border-2 border-white px-2 py-1 cursor-pointer transition-all duration-500 rounded-xl bg-white-transparent button-effect">
                  <p className="heading-text-shadow">INFO</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-full mb-8 md:mb-16 text-center heading-text-shadow"
        // initial={{ opacity: 0, translateY: 50, filter: "blur(4px)" }}
        // whileInView={{ opacity: 1, translateY: 0, filter: "blur(0px)" }}
        // transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
      >
        <h1
          className="font-title mb-8 text-white text-lg md:text-xl heading-text-shadow mix-blend-exclusion"
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
              <div className="relative h-64 w-full md:w-1/3 mb-0 flex items-center justify-center overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl opacity-90">
                <Image
                  src={work.image.url}
                  alt={work.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full text-left md:w-2/3 md:pl-4 md:text-right p-4 border-white border-2 border-t-4 md:border-t-2 md:border-l-4 rounded-b-xl md:rounded-bl-none md:rounded-r-xl bg-white-transparent mix-blend-difference">
                <h3 className="font-title font-weight-500 tracking-wider mb-4 text-md md:text-lg heading-text-shadow">
                  {work.title}
                </h3>
                <Markdown>{work.description}</Markdown>
              </div>
            </div>
          ))}
          <div className="" />
        </div>
      </div>

      <div
        className="w-full mb-8 md:mb-16 text-center mix-blend-difference"
        // initial={{ opacity: 0, translateY: 50, filter: "blur(4px)" }}
        // whileInView={{ opacity: 1, translateY: 0, filter: "blur(0px)" }}
        // transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
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
      </div>

      <div
        className="w-full mb-8 md:mb-16 text-center"
        // initial={{ opacity: 0, translateY: 50, filter: "blur(4px)" }}
        // whileInView={{ opacity: 1, translateY: 0, filter: "blur(0px)" }}
        // transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
      >
        <h1 className="font-title mb-8 text-white text-lg md:text-xl heading-text-shadow mix-blend-difference">
          Supporters
        </h1>
        <div className="w-full flex justify-around h-32 mix-blend-difference">
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
      </div>
    </div>
  );
};
