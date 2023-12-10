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
      left: 20,
    },
    {
      label: "LeetCode",
      link: "https://leetcode.com/sanskar1900/",
      left: 40,
      imgUrl: "https://coderssb.com/Resources/leetcode-logo.png",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sanskar-bhadauriya-9253781a7/",
      left: 60,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
    {
      label: "GitHub</>",
      link: "https://github.com/sanskar1900",
      left: 80,
      imgUrl:
        "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    },
  ];
  return (
    <GlobalThemeProvider>
      <Layout>
        <Introduction
          name="Sanskar Bhadauriya"
          designation="UI Engineer | Competitive Programmer | Educator"
          profileLinks={profileLinks}
        />
      </Layout>
    </GlobalThemeProvider>
  );
}

export default Home;
