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
  return (
    <GlobalThemeProvider>
      <Layout>
        <Introduction
          name="Sanskar Bhadauriya"
          designation="Frontend Engineer | MERN Developer"
          profileLinks={profileLinks}
          profilePicture="https://media.licdn.com/dms/image/D4D03AQHnY3wC5UniAA/profile-displayphoto-shrink_400_400/0/1690631942836?e=1710374400&v=beta&t=q8v680Tfkh9gwhTehkXJqkqep5pKw3U4hZ2nTe3jiNI"
        />
      </Layout>
    </GlobalThemeProvider>
  );
}

export default Home;
