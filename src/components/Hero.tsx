import { HamburgerIcon } from "@chakra-ui/icons";
import { BoxProps } from "@chakra-ui/layout";
import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";
import { Container } from "./Container";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Nav from "./Nav";
export const MotionBox = motion<BoxProps>(Box);
export const Hero = ({ title }: { title: string }) => {
  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");
  const buttonBgColor = useColorModeValue("white", "transparent");
  const buttonColor = useColorModeValue("black", "white");
  const titleColor = useColorModeValue("blue.600", "white");
  return (
    <Container h="100%" w="100vw">
      <Nav>
        <DarkModeSwitch />
        <HamburgerIcon h={8} w={8} />
      </Nav>
      <Flex
        h="100%"
        flexDir="column"
        role="group"
        p={4}
        w={["100vw", "70vw"]}
        justify="center"
      >
        <Text
          fontSize={["1.3rem", "1.1rem"]}
          fontWeight="300"
          textTransform="uppercase"
          letterSpacing="4px"
        >
          My name is
        </Text>
        <Text
          fontSize={["6vw", "3rem"]}
          fontWeight="600"
          textTransform="uppercase"
          letterSpacing="4px"
        >
          Adam Rajchwald
        </Text>
        <HStack
          alignItems="center"
          fontWeight="700"
          spacing={[4, 6]}
          mb="10px"
          w="100%"
          fontSize={["9.2vw", "6vw"]}
          // bgGradient="linear(to-l, #7928CA, #FF0080)"
          // bgClip="text"
          color={titleColor}
          fontStyle="italic"
          sx={{
            textShadow: "0 0 7px #3fc0fb",
          }}
        >
          <Box>{`<`}</Box>

          <Text
            _groupHover={{
              letterSpacing: "10px",
              transition: "0.2s linear",
            }}
          >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: [
                  "WebDeveloper",
                  "FullStackDev",
                  "FrontEnd",
                  "BackEnd",
                  "ReactJS",
                ],
                delay: 90,
                deleteSpeed: 100,
              }}
            />
          </Text>
          <Box>{`/ >`}</Box>
        </HStack>

        <Text
          maxW={["80%", "45%"]}
          mb="30px"
          fontSize="1.1rem"
          fontWeight="500"
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
        <Box>
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
        </Box>
        <Box></Box>
        {/* <ChevronDownIcon color="white" w={7} h={7} /> */}
      </Flex>
    </Container>
  );
};

Hero.defaultProps = {
  title: "WebDeveloper",
};
