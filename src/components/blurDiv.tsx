import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  ScaleFade,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React, { ReactElement, useRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { useInViewport } from "react-in-viewport";

export default function BlurDiv({ project }: any): ReactElement {
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
        <Box pos="relative" ref={ref}>
          <Box
            zIndex={5}
            pos="relative"
            borderRadius="md"
            border="2px solid white"
          >
            <VStack
              spacing={2}
              align="flex-start"
              p={4}
              borderRadius="md"
              h="100%"
              background="rgba(2, 10, 37, 0.9)"
              color="white"
            >
              <Heading as="h4" size="md">
                Featured Project
              </Heading>
              <Heading as="a" href="#" _hover={{ color: "blue.200" }} py={2}>
                {project.title}
              </Heading>
              <Container borderRadius="md" color="white" py={2} px={0}>
                <Text>{project.summary}</Text>
              </Container>

              <Wrap spacing={2} py={2}>
                {project.tags.map((tag) => (
                  <Tag
                    key={tag}
                    variant="outline"
                    border="1px solid"
                    borderColor="blue.400"
                    color="white"
                    size="md"
                  >
                    {tag}
                  </Tag>
                ))}
              </Wrap>
              <HStack>
                <Link href={project.github}>
                  <Icon
                    as={AiOutlineGithub}
                    h={6}
                    w={6}
                    _hover={{
                      color: "blue.400",
                      transform: "translateY(-0.2em)",
                    }}
                  />
                </Link>
                <Link href={project.link}>
                  <ExternalLinkIcon
                    h={6}
                    w={6}
                    _hover={{
                      color: "blue.400",
                      transform: "translateY(-0.2em)",
                    }}
                  />
                </Link>
              </HStack>
            </VStack>
          </Box>
          <Box
            bgImage={project.imageUrl}
            pos="absolute"
            top="0"
            left="0"
            // filter="blur(1px)"
            bgPos="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="100%"
            w="100%"
            opacity={1}
            borderRadius="md"
            zIndex={0}
          ></Box>
        </Box>
      </ScaleFade>
    </Box>
  );
}
