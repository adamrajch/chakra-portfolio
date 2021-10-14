import {
  Container,
  Grid,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import BlurDiv from "./blurDiv";
import OtherProjectSection from "./OtherProjectSection";
import ProjectSection from "./ProjectSection";
export default function Projects(): ReactElement {
  const color = useColorModeValue("black", "white");
  const data = [
    {
      title: "Movie Reccs",
      summary:
        "Fullstack application that uses Supabase backend to create recommendation lists for anime and movies. You can save different media to custom lists to share to your friends. You can search anime and movies via the Jigan API and the TMDB API. Data is saved to the user profile user the Supabase relational database and fetched with subscription hooks",
      tags: ["React", "Supabase", "ChakraUI", "NextJS"],
      github: "https://github.com/adamrajch/supa-lists",
      link: "https://supa-lists.vercel.app",
      imageUrl: "/supalists.png",
    },
    {
      title: "Crypto Dashboard",
      summary:
        "A dashboard for all your cryptos. Search. filter, and see trends in the crypto market and news. Redux Toolkit is used with RTK Query to fetch from the various crypto API. Light and Dark theme available ",
      tags: ["React", "Redux Toolkit", "ChakraUI"],
      github: "https://github.com/adamrajch/crypto-redux-chakra",
      link: "https://crypto-redux-chakra.vercel.app/",
      imageUrl: "/crypto.png",
    },
    {
      title: "Gooble",
      summary:
        "Google search API functionality with serverside rendering. UI is created to match google styles with TailwindCSS. Data is fetched via NextJS serverside functionality functions",
      tags: ["React", "Tailwind", "SSR", "NextJS"],
      github: "https://github.com/adamrajch/gooble",
      link: "https://gooble.vercel.app",
      imageUrl: "/google.png",
    },
    {
      title: "Gooble Docs",
      summary:
        "A fullstack website that uses Google's styling. Created with authentication built with Firebase v9. I used firestore as the database to store user data and docs created with Rich Text Editor.",
      tags: ["React", "TailwindCSS", "Firebase", "NextJS"],
      github: "https://github.com/adamrajch/gooble-docs",
      link: "https://gooble-docs.vercel.app/",
      imageUrl: "/gooble.png",
    },

    {
      title: "LinkedIn",
      summary:
        "A basic clone of LinkedIn. Uses firebase v8 with react hooks. Comes with full authentication and login features",
      tags: ["React", "Firebase", "Firestore"],
      github: "https://github.com/adamrajch/linkedIn-clone",
      link: "https://linked-in-9dab7.web.app/",
      imageUrl: "/linkedIn.png",
    },
  ];

  const otherProjects = [
    {
      title: "TFT Stat Gen",
      summary:
        "A statistic generator for the popular auto chess game, Team Fight Tactics. The user can change the game state, influencing the chance of rolling the desired character. This game relies on statistics heavy and it is useful to know these numbers while playing in certain scenarios",
      tags: ["React", "CSS", "Game Calculator"],
      github: "www.google.com",
      link: "https://tft-calc.vercel.app/set4",
    },
  ];
  return (
    <Container
      maxW={["", "container.md", "container.lg"]}
      py={8}
      id="portfolio"
    >
      <Heading mt={3} textAlign="center" my={4}>
        Portfolio
      </Heading>
      <VStack spacing={6} display={["none", "block"]}>
        {data.map((p, i) => {
          return <ProjectSection p={p} i={i} key={p.title} />;
        })}
      </VStack>
      <VStack display={["block", "none"]} spacing={3}>
        {data.map((p, i) => {
          return <BlurDiv project={p} key={p.title} />;
        })}
      </VStack>

      <Heading textAlign="center" mt={28} mb={[8, 16]}>
        Other Projects
      </Heading>

      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={3}
      >
        {otherProjects.map((p) => (
          <OtherProjectSection p={p} key={p.title} />
        ))}
      </Grid>
    </Container>
  );
}
