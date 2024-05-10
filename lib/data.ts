import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import personalsiteImg from "@/public/personal-site.png";
import mlwebImg from "@/public/ml-web-app.png";
import spotifymockImg from "@/public/spotify-mock.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Studied at Queen's University",
    location: "Kingston, ON",
    description:
      "Working toward my Bachelors of Computing (Honour's) and learning the fundementals of computing.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-Present",
  },
  {
    title: "First Year Representative - Queen's Extended Reality",
    location: "Kingston, ON",
    description:
      "Researched extended reality to procure information for general members and recruited dozens of members during the Club Fair",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Design Team - Queen's Extended Reality",
    location: "Kingston, ON",
    description:
      "I am working in all four stages of production (research, design, prototyping, and sponsorships) in order to develop an XR headset with a small dynamic engineering team.  ",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Present,
  },
  {
    title: "Design and Back-end Developer - Queen's University Web Development",
    location: "Kingston, ON",
    description:
      "Worked as the chief designer and back-end engineer in a team of 5 in order to build a website for an energy drink company.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - May 2024",
  },
  {
    title: "Data Engineering Intern - Knorket.AI",
    location: "Kingston, ON",
    description:
      "Used machine learning to structure raw documents from various cloud and web sources into vector databases",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - April 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Website",
    description:
      "Built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting..",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Framer", "Vercel"],
    imageUrl: personalsiteImg,
  },
  {
    title: "VGG-19 Image Detection",
    description:
      "Web application which uses machine learning to determine what an image displays",
    tags: ["Python", "Flask", "Tensorflow", "Keras", "NumPy", "Git"],
    imageUrl: mlwebImg,
  },
  {
    title: "AudioSphere",
    description:
      "A spotify clone which is fully functional including premium plans and song uploads",
    tags: ["React", "Typescript", "Next.js", "PostgreSQL", "Tailwind", "Supabase"],
    imageUrl: spotifymockImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "LangChain",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "C++",
  "Supabase",
  "Java",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
