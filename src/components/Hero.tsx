import { BoxProps } from "@chakra-ui/layout";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { RiNewspaperLine } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import { Container } from "./Container";
import Nav from "./Nav";
export const MotionBox = motion<BoxProps>(Box);
export const Hero = ({ title }: { title: string }) => {
  const bg = useColorModeValue("red.500", "red.200");
  const subColor = useColorModeValue("gray.600", "gray.300");
  const nameColor = useColorModeValue("blue.800", "blue.200");
  const buttonBgColor = useColorModeValue("white", "transparent");
  const buttonColor = useColorModeValue("black", "white");
  const titleColor = useColorModeValue("blue.600", "white");
  return (
    <Container
      h="100%"
      p={0}
      m="auto"

      // maxW={["", "container.lg", "container.xl"]}
    >
      <Nav />
      <Flex
        h="100%"
        flexDir="column"
        role="group"
        p={[6, 4]}
        w={["100vw", "80vw"]}
        justify="center"
        id="home"
      >
        <Text
          fontSize={["1.1rem", "1.3rem", "2.4rem"]}
          fontWeight="300"
          textTransform="uppercase"
          letterSpacing="4px"
        >
          My name is
        </Text>
        <Text
          fontSize={["1.4rem", "1.5rem", "2rem", "4rem"]}
          fontWeight="600"
          textTransform="uppercase"
          letterSpacing="4px"
          color={nameColor}
        >
          Adam Rajchwald
        </Text>
        <HStack
          alignItems="center"
          fontWeight="700"
          spacing={[1, 6]}
          mb="10px"
          w="100%"
          fontSize={["1.7rem", "2.2rem", "3.3rem", "5rem", "6rem"]}
          // bgGradient="linear(to-l, #7928CA, #FF0080)"
          // bgClip="text"
          color={titleColor}
          fontStyle="italic"
          sx={{
            textShadow: "0 0 7px #3fc0fb",
          }}
          py={3}
          letterSpacing={["2px", "5px"]}
        >
          <Box>{`<`}</Box>

          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: [
                "WebDeveloper",
                "FullStackDev",
                "FrontEndDev",
                "BackEndDev",
                "ReactDeveloper",
              ],
              delay: 90,
              deleteSpeed: 100,
            }}
          />

          <Box>{`/ >`}</Box>
        </HStack>

        <Text
          maxW={["80%", "45%"]}
          mb="30px"
          fontSize={["0.9rem", "1.1rem"]}
          fontWeight="500"
          color={subColor}
        >
          I'm a fullstack web developer based in Chicago, Illinois specializing
          in building responsive and performative websites.
        </Text>

        <Text
          maxW={["80%", "45%"]}
          mb="30px"
          fontSize="1.1rem"
          fontWeight="500"
        >
          I ❤️{" "}
          <Text as="span" fontSize="1.2rem" color="blue.300">
            React
          </Text>{" "}
          &{" "}
          <Text as="span" fontSize="1.2rem" color="blue.300">
            Typescript
          </Text>{" "}
        </Text>
        <Flex>
          <Button
            borderRadius="none"
            size="md"
            border="1px solid white"
            display={["block", "none"]}
            bgColor={buttonBgColor}
            color={buttonColor}
            borderColor={buttonColor}
          >
            Get in touch
          </Button>
          <Button
            borderRadius="none"
            size="lg"
            border="1px solid white"
            display={["none", "block"]}
            bgColor={buttonBgColor}
            color={buttonColor}
            borderColor={buttonColor}
          >
            Get in touch
          </Button>

          <Button
            display={["inline-block", "none"]}
            borderRadius="none"
            size="md"
            border="1px solid white"
            bgColor={buttonBgColor}
            color={buttonColor}
            // borderColor={buttonColor}
            mx={4}
          >
            Resume <Icon as={RiNewspaperLine} h={5} w={5} ml={2} />
          </Button>

          <Button
            display={["none", "inline-block"]}
            borderRadius="none"
            size="lg"
            border="1px solid white"
            bgColor={buttonBgColor}
            color={buttonColor}
            borderColor={buttonColor}
            mx={4}
            _hover={{ borderColor: "blue.300", color: "blue.400" }}
          >
            Resume <Icon as={RiNewspaperLine} h={5} w={5} ml={2} />
          </Button>
        </Flex>

        {/* <ChevronDownIcon color="white" w={7} h={7} /> */}
      </Flex>
    </Container>
  );
};

Hero.defaultProps = {
  title: "WebDeveloper",
};
