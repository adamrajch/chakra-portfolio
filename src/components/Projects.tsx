import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import BlurDiv from "./blurDiv";
export default function Projects(): ReactElement {
  const color = useColorModeValue("black", "white");
  const data = [
    {
      title: "Movie Reccs",
      summary:
        "Fullstack application that uses Supabase backend to create recommendation lists for anime and movies. You can save different media to custom lists to share to your friends. You can search anime and movies via the Jigan API and the TMDB API. Data is saved to the user profile user the Supabase relational database and fetched with subscription hooks",
      tags: ["React", "Supabase", "ChakraUI", "NextJS"],
      github: "https://github.com/adamrajch/supa-lists",
      link: "https://supa- lists.vercel.app",
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
      link: "gooble.vercel.app",
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
      title: "SupaLists",
      summary: "description nani bog bungi",
      tags: ["Supabase", "ChakraUI", "React", "NextJS"],
      github: "www.google.com",
      link: "www.google.com",
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
          return (
            <Grid templateColumns="repeat(10, 1fr)" key={p.title} role="group">
              <GridItem
                alignSelf={i % 2 == 0 ? "flex-start" : "center"}
                gridRow="1/2"
                gridColumn={i % 2 == 0 ? "4/-1" : "1/6"}
                zIndex="500"
              >
                <VStack
                  spacing={2}
                  align={i % 2 == 0 ? "flex-end" : "flex-start"}
                  p={6}
                  borderRadius="md"
                  zIndex="500"
                >
                  <Heading as="h4" size="sm">
                    Featured Project
                  </Heading>
                  <Heading as="a" href={p.link} _hover={{ color: "blue.300" }}>
                    {p.title}
                  </Heading>
                  <Box
                    bgColor="blue.800"
                    borderColor={color}
                    border="1px solid"
                    boxShadow="lg"
                    p={5}
                    borderRadius="md"
                    color="white"
                  >
                    <Text>{p.summary}</Text>
                  </Box>

                  <HStack>
                    {p.tags.map((tag) => (
                      <Tag
                        key={tag}
                        variant="outline"
                        border="1px solid"
                        borderColor="blue.400"
                        color={color}
                        size="lg"
                      >
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                  <HStack>
                    <Link href={p.github}>
                      <Icon
                        as={AiOutlineGithub}
                        h={8}
                        w={8}
                        _hover={{
                          color: "blue.400",
                          transform: "translateY(-0.2em)",
                        }}
                      />
                    </Link>
                    <Link href={p.link}>
                      <ExternalLinkIcon
                        h={8}
                        w={8}
                        _hover={{
                          color: "blue.400",
                          transform: "translateY(-0.2em)",
                        }}
                      />
                    </Link>
                  </HStack>
                </VStack>
              </GridItem>
              <GridItem
                gridRow="1/2"
                gridColumn={i % 2 == 0 ? "1/6" : "5/-1"}
                opacity={0.8}
                zIndex="1"
              >
                <Image
                  h="auto"
                  w="auto"
                  maxH="100%"
                  src={p.imageUrl}
                  borderRadius="md"
                  border="2px solid"
                  _hover={{
                    borderColor: "blue.400",
                    transform: "scale(1.05)",
                  }}
                  filter="grayscale(70%)"
                  _groupHover={{
                    filter: "none",
                  }}
                />
              </GridItem>
            </Grid>
          );
        })}
      </VStack>
      <VStack display={["block", "none"]} spacing={3}>
        {data.map((p, i) => {
          return <BlurDiv project={p} key={p.title} />;
        })}
      </VStack>

      {/* <Heading textAlign="center" mt={28} mb={[8, 16]}>
        Other Projects
      </Heading>

      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={5}>
        {otherProjects.map((p) => (
          <Box
            key={p.title}
            p={5}
            borderRadius="md"
            bgColor="gray.600"
            border="3px solid transparent"
            _hover={{
              borderColor: "blue.500",
            }}
          >
            <HStack justify="space-between" align="center" mb={2}>
              <Icon as={BiCode} h={[8, 9]} w={[8, 9]} />
              <Link href="#">
                <ExternalLinkIcon
                  h={[6, 9]}
                  w={[6, 9]}
                  _hover={{
                    color: "blue.400",
                    transform: "translateY(-.2rem)",
                  }}
                />
              </Link>
            </HStack>
            <VStack align="flex-start">
              <Heading textAlign="left" size="lg">
                {p.title}
              </Heading>

              <Text>{p.summary}</Text>
              <Wrap spacing={2}>
                {p.tags.map((tag) => (
                  <Tag
                    bgColor="transparent"
                    color="white"
                    border="1px solid"
                    borderColor="blue.500"
                    variant="outline"
                    size="md"
                    key={tag}
                  >
                    {tag}
                  </Tag>
                ))}
              </Wrap>
            </VStack>
          </Box>
        ))}
      </Grid> */}
    </Container>
  );
}
