"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/public/components/navbar";
import RootLayout from "./layout";
import Layout from "@/public/components/Layout";
import { themeReducer } from "@/src/themeReducer";
import { GlobalThemeProvider, useGlobalContext } from "./context/store";
import "./globals.css";
import Introduction from "@/public/components/Introduction";

function Home() {
  const profileLinks = [
    {
      label: "CodeChef",
      link: "https://www.codechef.com/users/sanskar1900",
      imgUrl:
        "https://www.saashub.com/images/app/service_logos/41/fb1029f65050/large.png",
      left: 1,
    },
    {
      label: "LeetCode",
      link: "https://leetcode.com/sanskar1900/",
      left: 8,
      imgUrl: "https://coderssb.com/Resources/leetcode-logo.png",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sanskar-bhadauriya-9253781a7/",
      left: 16,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
    {
      label: "GitHub</>",
      link: "https://github.com/sanskar1900",
      left: 24,
      imgUrl:
        "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    },
  ];

  const sections = [
    {
      heading: "Experience",
      values: [
        {
          companyName: "Allen DIGITAL",
          designation: "Software Enginner",
          about: [
            "Designed and built multiple end-to-end UI flows, improving the platform's usability and engagement.",
            "Improved website SEO by optimizing Next.js implementation and addressing key performance issues.",
            "Optimized web performance by resolving key issues to enhance user experience and improve Core Web Vitals scores.",
            "Developed and executed test cases using Jest to ensure feature reliability and maintainability.",
          ],
          techStack: ["JavaScript", "React.js", "Node.js", "Typescript", "GIT"],
          companyLogo:
            "https://avatars.githubusercontent.com/u/124130617?s=200&v=4",
          height: 60,
          width: 60,
        },
        {
          companyName: "BrightChamps",
          designation: "SDE - 1",
          about: [
            "Built and maintained the BrightChamps website using React and JavaScript, improving dashboards, cutting load times by 15% and boosting user engagement.",
            "Contributed to open source by developing a scheduling calendar to showcase class events in the teacher dashboard, improving the teacher’s experience and reducing the operations team’s manual work by 25%",
          ],
          techStack: ["JavaScript", "React.js", "BitBucket", "MUI"],
          companyLogo: " https://etimg.etb2bimg.com/photo/111753217.cms",

          height: 60,
          width: 120,
        },
        {
          companyName: "Masai School",
          designation: "DSA Mentor",
          about: [
            "Mentored over 50 student batches in Data structures and algorithms in Java, creating an inclusive and interactive learning environment.> Mentored over 50 student batches in Data structures and algorithms in Java, creating an inclusive and interactive learning environment.",
          ],
          techStack: ["Java", "Data Structures", "Algorithms", "Teaching"],
          companyLogo:
            "https://drive.google.com/file/d/1i7r6lum3y0LLZJXz6VW_mr7UDgsaG4h2/view?usp=drive_link",
        },
        {
          companyName: "CodeChef",
          designation: "Doubt Solver",
          about: [
            "As a mentor for C++ DSA and competitive programming, I find immense satisfaction in guiding students of a particular rating range on CodeChef through the intricacies of algorithms and coding challenges. Each doubt session is an opportunity to share knowledge, foster creativity, and ignite a passion for problem-solving.",
          ],
          techStack: ["C++", "Data Structures", "Algorithms"],
          companyLogo:
            "https://drive.google.com/file/d/1i7r6lum3y0LLZJXz6VW_mr7UDgsaG4h2/view?usp=drive_link",
        },
      ],
    },
    { heading: "Projects" },
    { heading: "Skills" },
    { heading: "Contact" },
  ];

  return (
    <GlobalThemeProvider>
      <Layout>
        <Introduction
          sections={sections}
          name="Sanskar Bhadauriya"
          designation="Fullstack Engineer"
          profileLinks={profileLinks}
          profilePicture="https://media.licdn.com/dms/image/D4D03AQHnY3wC5UniAA/profile-displayphoto-shrink_400_400/0/1690631942836?e=1710374400&v=beta&t=q8v680Tfkh9gwhTehkXJqkqep5pKw3U4hZ2nTe3jiNI"
        />
      </Layout>
    </GlobalThemeProvider>
  );
}

export default Home;
