import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import LinkSection from "../components/LinkSection";
import Projects from "../components/Projects";
import Tech from "../components/Tech";
const Index = () => (
  <Box
    h="100%"
    overflowY="scroll"
    overflowX="hidden"
    sx={{
      "&::-webkit-scrollbar": {
        width: "4px",
        height: "8px",
      },
      "&:: -webkit-scrollbar-track": {
        width: "6px",
        backgroundColor: "#171529",
        borderRadius: "0px",
      },
      "&:: -webkit-scrollbar-thumb": {
        backgroundColor: "blue.400",
        borderRadius: "80px",
      },
    }}
  >
    <Head>
      <title>Adam Rajchwald</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/homer.png" />
    </Head>
    <LinkSection />
    <Hero />

    <About />
    <Tech />
    <Projects />

    <Contact />
  </Box>
);

export default Index;
