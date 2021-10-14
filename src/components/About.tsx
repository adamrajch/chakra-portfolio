import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { GiBiceps } from "react-icons/gi";
import { RiComputerLine, RiPlantLine } from "react-icons/ri";
import { Wrapper } from "./Wrapper";
export default function About(): ReactElement {
  return (
    <Wrapper maxW={["container.md", "container.md", "container.xl"]} id="about">
      <Flex
        align="center"
        flexDir={{ base: "column-reverse", xl: "row" }}
        justifyContent="space-around"
        px={2}
        py={2}
      >
        <Container display="flex" flexDir="column" maxW={["md", "2xl"]}>
          <Heading mt={2} size="2xl">
            README.md
          </Heading>
          <Box w="20%" borderBottom="2px solid white" mb={2} />
          <Heading as="h4" size="md" mb={4}>
            Full Stack Web Developer
          </Heading>
          <VStack
            as="ul"
            align="flex-start"
            textAlign="left"
            mb={5}
            spacing={1}
          >
            <HStack>
              <Icon h={7} w={7} as={RiPlantLine} />
              <Text> Currently Learning: React Native</Text>
            </HStack>
            <HStack>
              <Icon h={7} w={7} as={RiComputerLine} />
              <Text> Favorite Stack: NextJS, Firebase, ChakraUI</Text>
            </HStack>
            <HStack>
              <Icon h={7} w={7} as={GiBiceps} />
              <Text> Competitive Armwrestler</Text>
            </HStack>
          </VStack>
          <Container maxW="md" px={0}>
            <Text>
              Hey there! My name is Adam and I love doing anything related to
              web development. I have been self taught since 2018 when I first
              started learning basic HTML, CSS, and Javascript. Since then, I
              have dove headfirst into the wide Javascript ecosystem and love
              using React, Typescript, and varous UI libraries. <br /> <br />I
              focus on building responsive and elegant UI for various websites.
              I am well versed in various backends, lately I have been enjoying
              the serverless / cloud backends such as Firebase and AWS.
              <br />
              <br />I am always looking into open source projects and creating
              new ideas myself. My first blog post is coming soon!
            </Text>
          </Container>
        </Container>
        <Image
          h="auto"
          w="auto"
          maxH={["35vh", "50vh"]}
          src="/selfie.jpg"
          p={4}
          borderRadius="md"
          border="2px solid"
          _hover={{
            borderColor: "blue.400",
          }}
          my={{ base: 4, xl: 0 }}
        />
      </Flex>
    </Wrapper>
  );
}
