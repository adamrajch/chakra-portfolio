import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { AiOutlineGithub } from "react-icons/ai";

export default function BlurDiv({ project }: any): ReactElement {
  return (
    <Box pos="relative">
      <Box zIndex={5} pos="relative" borderRadius="md">
        <VStack
          spacing={2}
          align="flex-start"
          p={4}
          borderRadius="md"
          h="100%"
          background="rgba(4, 32, 34, 0.8)"
          color="white"
        >
          <Heading as="h4" size="sm">
            Featured Project
          </Heading>
          <Heading as="a" href="#" _hover={{ color: "gold" }} py={2}>
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
  );
}
