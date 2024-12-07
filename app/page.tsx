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
          companyName: "BrightChamps",
          designation: "Software Development Engineer -1",
          about:
            "Collaboratively spearheaded the development, maintenance, and release of multiple versions of BrightChamps student dashboard, teacher dashboard and website. working closely with a dynamic team to achieve project milestones and ensure seamless UX.",
          techStack: ["JavaScript", "React.js", "Node.js", "Typescript", "GIT"],
          companyLogo: "../../../app/assets/brightchamps.png",
        },
        {
          companyName: "BrightChamps",
          designation: "Software Development Engineer -1",
          about:
            "Collaboratively spearheaded the development, maintenance, and release of multiple versions of BrightChamps student dashboard, teacher dashboard and website. working closely with a dynamic team to achieve project milestones and ensure seamless UX.",
          techStack: ["JavaScript", "React.js", "Node.js", "Typescript", "GIT"],
          companyLogo:
            "data:image/png;base64,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",
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
