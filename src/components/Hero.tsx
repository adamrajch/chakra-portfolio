import { BoxProps, VStack } from "@chakra-ui/layout";
import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
export const MotionBox = motion<BoxProps>(Box);
export const Hero = ({ title }: { title: string }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Flex
      flexDir="column"
      role="group"
      p={4}
      w={["100vw", "70vw"]}
      justify="center"
    >
      <Text
        fontSize={["4vw", "1.5rem"]}
        fontWeight="400"
        textTransform="uppercase"
        letterSpacing="4px"
        my={1}
      >
        I am Adam Rajchwald
      </Text>
      <HStack
        my={1}
        alignItems="center"
        spacing={[4, 8]}
        mb="40px"
        w="100%"
        fontSize={["9.2vw", "5vw"]}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
      >
        <Box
          _groupHover={{
            transform: "translateX(-0.3em)",
            transition: "0.2s linear",
            color: "gold",
          }}
        >{`<`}</Box>

        <Text
          _groupHover={{
            letterSpacing: "6px",
            transition: "0.2s linear",
          }}
        >
          {title}
        </Text>
        <Box
          _groupHover={{
            color: "gold",
            transform: "translateX(0.3em)",
            transition: "0.2s linear",
          }}
        >{`/ >`}</Box>
      </HStack>
      <Box>
        <Button
          borderRadius="none"
          size="md"
          border="1px solid white"
          display={["block", "none"]}
        >
          Contact Me
        </Button>
        <Button
          borderRadius="none"
          size="lg"
          border="1px solid white"
          display={["none", "block"]}
        >
          Contact Me
        </Button>
      </Box>
      <Box></Box>
      {/* <ChevronDownIcon color="white" w={7} h={7} /> */}
    </Flex>

    <VStack
      spacing={4}
      position="fixed"
      bottom="2rem"
      left="2rem"
      display={["none", "flex"]}
    >
      <Text
        transform="rotate(-90deg)"
        fontSize="1.5rem"
        letterSpacing="4px"
        my={4}
      >
        Links
      </Text>
      <Box h={12} borderRight="1px solid white" />
      <Link href="gooogle.com">
        <Icon
          as={AiOutlineGithub}
          cursor="pointer"
          w={7}
          h={7}
          _hover={{ transform: "translateX(0.6em)" }}
        />
      </Link>
      <Link href="gooogle.com">
        <Icon
          as={AiOutlineLinkedin}
          cursor="pointer"
          w={7}
          h={7}
          _hover={{ transform: "translateX(0.6em)" }}
        />
      </Link>
      <Link href="gooogle.com">
        <Icon
          as={AiOutlineInstagram}
          cursor="pointer"
          w={7}
          h={7}
          _hover={{ transform: "translateX(0.6em)" }}
        />
      </Link>
    </VStack>
  </Flex>
);

Hero.defaultProps = {
  title: "WebDeveloper",
};
