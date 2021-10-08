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
import { BiCode } from "react-icons/bi";
export default function Projects(): ReactElement {
  const color = useColorModeValue("black", "white");
  const data = [
    {
      title: "SupaLists",
      summary: "description nani bog bungi",
      tags: ["Supabase", "ChakraUI", "React", "NextJS"],
      github: "www.google.com",
      link: "www.google.com",
      imageUrl: "/carbon.png",
    },
    {
      title: "SupaLists",
      summary: "description nani bog bungi",
      tags: ["Supabase", "ChakraUI", "React", "NextJS"],
      github: "www.google.com",
      link: "www.google.com",
    },
    {
      title: "SupaLists",
      summary: "description nani bog bungi",
      tags: ["Supabase", "ChakraUI", "React", "NextJS"],
      github: "www.google.com",
      link: "www.google.com",
    },
    {
      title: "SupaLists",
      summary: "description nani bog bungi",
      tags: ["Supabase", "ChakraUI", "React", "NextJS"],
      github: "www.google.com",
      link: "www.google.com",
    },
  ];
  return (
    <Container maxW="container.xl" py={8}>
      <Heading mt={3} textAlign="center" my={4}>
        Portfolio
      </Heading>
      <VStack spacing={2}>
        {data.map((p, i) => {
          return (
            <Grid templateColumns="repeat(10, 1fr)" key={p.title} h="45vh">
              <GridItem
                alignSelf={i % 2 == 0 ? "flex-start" : "center"}
                gridRow="1/2"
                gridColumn={i % 2 == 0 ? "4/10" : "1/6"}
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
                  <Heading as="a" href={p.link} _hover={{ color: "gold" }}>
                    {p.title}
                  </Heading>
                  <Box
                    bgColor="gray.600"
                    borderColor={color}
                    border="1px solid"
                    boxShadow="lg"
                    p={5}
                    borderRadius="md"
                    color="white"
                  >
                    <Text>
                      {/* {p.summary} i={i} */}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolorum asperiores, porro voluptates debitis harum
                      delectus veritatis repellendus in dicta nostrum temporibus
                      aut nobis adipisci quasi molestias accusantium ex earum
                      ut.
                    </Text>
                  </Box>

                  <HStack>
                    {p.tags.map((tag) => (
                      <Tag
                        key={tag}
                        variant="outline"
                        border="1px solid"
                        borderColor="blue.400"
                        // bgColor="transparent"
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
                gridColumn={i % 2 == 0 ? "1/5" : "5/10"}
                opacity={0.8}
                zIndex="1"
              >
                <Image
                  h="auto"
                  w="auto"
                  maxH="100%"
                  src="https://blogs.forbes.com/olliebarder/files/2018/12/dbs_broly_1.jpg"
                  //   p={2}
                  borderRadius="md"
                  border="2px solid"
                  _hover={{
                    borderColor: "blue.400",
                    transform: "scale(1.05)",
                  }}
                />
              </GridItem>
            </Grid>
          );
        })}
      </VStack>

      <Heading textAlign="center">Other Projects </Heading>

      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={5}>
        <Box
          p={5}
          borderRadius="md"
          bgColor="gray.600"
          border="3px solid transparent"
          _hover={{
            borderColor: "blue.500",
          }}
        >
          <HStack justify="space-between" align="center" mb={2}>
            <Icon as={BiCode} h={9} w={9} />
            <Link href="#">
              <ExternalLinkIcon
                h={7}
                w={7}
                _hover={{
                  color: "blue.400",
                  transform: "translateY(-.2rem)",
                }}
              />
            </Link>
          </HStack>
          <VStack align="flex-start">
            <Heading textAlign="left" size="lg">
              Title
            </Heading>

            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum quo quasi, optio voluptatem voluptate id molestiae
              laborum quis aliquid facere odit amet provident! Quidem molestiae
              quis temporibus est voluptates earum.
            </Text>

            <Tag
              bgColor="transparent"
              color="white"
              border="1px solid"
              borderColor="blue.500"
              variant="outline"
              size="lg"
            >
              hi
            </Tag>
          </VStack>
        </Box>
        <Box p={3} borderRadius="md" bgColor="gray.600">
          hi
        </Box>
        <Box p={3} borderRadius="md" bgColor="gray.600">
          hi
        </Box>
        <Box p={3} borderRadius="md" bgColor="gray.600">
          hi
        </Box>
        <Box p={3} borderRadius="md" bgColor="gray.600">
          hi
        </Box>
      </Grid>
    </Container>
  );
}
