import Icon from "@chakra-ui/icon";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  ScaleFade,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Tag } from "@chakra-ui/tag";
import React, { ReactElement, useRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { useInViewport } from "react-in-viewport";

export default function ProjectSection({ p, i }: any): ReactElement {
  const color = useColorModeValue("black", "white");
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <Box w="100%">
      <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Grid
          templateColumns="repeat(10, 1fr)"
          key={p.title}
          role="group"
          ref={ref}
        >
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
              <Heading
                as="a"
                href={p.link}
                _hover={{ color: "blue.300" }}
                target="blank"
              >
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
                <Link href={p.github} target="blank">
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
                <Link href={p.link} target="blank">
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
      </ScaleFade>
    </Box>
  );
}
