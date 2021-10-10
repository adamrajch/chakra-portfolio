import { Box, Icon, Link, useColorModeValue, VStack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DarkModeSwitchIcon } from "./DarkModeSwitchIcon";

export default function LinkSection(): ReactElement {
  const color = useColorModeValue("blue.600", "white");
  const hColor = useColorModeValue("blue.300", "blue.300");
  return (
    <VStack
      spacing={4}
      position="fixed"
      bottom="0"
      left="1rem"
      display={{ base: "none", xl: "flex" }}
      color={color}
    >
      <DarkModeSwitchIcon />
      <Link href="gooogle.com">
        <Icon
          as={AiOutlineGithub}
          cursor="pointer"
          w={7}
          h={7}
          _hover={{ transform: "translateY(-0.2em)", color: hColor }}
        />
      </Link>
      <Link href="gooogle.com">
        <Icon
          as={AiOutlineLinkedin}
          cursor="pointer"
          w={7}
          h={7}
          _hover={{ transform: "translateY(-0.2em)", color: hColor }}
        />
      </Link>
      <Link href="gooogle.com">
        <Icon
          as={AiOutlineInstagram}
          cursor="pointer"
          w={7}
          h={7}
          _hover={{ transform: "translateY(-0.2em)", color: hColor }}
        />
      </Link>
      <Box h={24} borderRight="1px solid" />
    </VStack>
  );
}
