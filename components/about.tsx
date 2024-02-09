"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a developer deeply passionate about{" "}
        <span className="font-medium">
          the intersection of technology and creativity
        </span>
        , I pride myself on being an independent, hardworking individual
        committed to excellence in every project I undertake.{" "}
        <span className="font-medium">
          I thrive in both team settings and solo projects, aiming to evolve
          into an accomplished full-stack developer
        </span>
        .{" "}
        <span className="italic">
          My experience with web and back-end development
        </span>
        , particularly in projects that offer professional-quality websites to
        underserved entities and in developing extended reality (XR)
        technologies underscores my commitment
        to leveraging technology for positive impact. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgresSQL
        </span>
        . I am also familiar with TypeScript, Python and various accompanying
        technologies. I am always looking to learn new technologies. I am
        currently looking for a{" "}
        <span className="font-medium">internship position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        hockey, relaxing with family and friends, and enjoying the outdoors. I
        also enjoy <span className="font-medium">learning new things</span>. I
        am currently learning about{" "}
        <span className="font-medium">self-improvement and philosophy</span>.
      </p>
    </motion.section>
  );
}
