import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-scroll";
import { DarkModeSwitchIcon } from "./DarkModeSwitchIcon";
interface Props {}

export default function MobileDrawer({}: Props): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const hColor = useColorModeValue("blue.300", "blue.300");
  const links = [
    {
      title: "about",
      ref: "about",
    },
    {
      title: "tech",
      ref: "tech",
    },
    {
      title: "portfolio",
      ref: "portfolio",
    },
    {
      title: "contact me",
      ref: "contact",
    },
  ];
  return (
    <>
      <HamburgerIcon
        h={8}
        w={8}
        ref={btnRef}
        onClick={onOpen}
        display={{ base: "inline-block", xl: "none" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex justify="center" align="center" flexDir="column" h="100%">
              <VStack spacing={4} as="ul">
                <DarkModeSwitchIcon />
                {links.map((link) => (
                  <Text
                    cursor="pointer"
                    _hover={{
                      color: "blue.300",
                    }}
                    key={link.ref}
                    fontWeight="bold"
                  >
                    <Link
                      to={link.ref}
                      spy={true}
                      smooth={true}
                      onClick={onClose}
                    >
                      {link.title}
                    </Link>
                  </Text>
                ))}
                <HStack
                  align="center"
                  justify="center"
                  spacing={4}
                  pt={12}
                  display={{
                    base: "inline-block",
                    xl: "none",
                  }}
                >
                  <Box
                    as="a"
                    href="https://github.com/adamrajch"
                    target="_blank"
                    cursor="pointer"
                    _hover={{
                      transform: "translateY(-0.2em)",
                      color: hColor,
                    }}
                  >
                    <Icon
                      as={AiOutlineGithub}
                      cursor="pointer"
                      w={7}
                      h={7}
                      _hover={{
                        transform: "translateY(-0.2em)",
                        color: hColor,
                      }}
                    />
                  </Box>
                  <Box
                    as="a"
                    href="https://www.linkedin.com/in/adamrajchwald/"
                    target="_blank"
                    cursor="pointer"
                  >
                    <Icon
                      as={AiOutlineLinkedin}
                      cursor="pointer"
                      w={7}
                      h={7}
                      _hover={{
                        transform: "translateY(-0.2em)",
                        color: hColor,
                      }}
                    />
                  </Box>
                  <Box
                    as="a"
                    href="https://www.instagram.com/tendon_mcgee/?hl=en"
                    target="_blank"
                    cursor="pointer"
                  >
                    <Icon
                      as={AiOutlineInstagram}
                      cursor="pointer"
                      w={7}
                      h={7}
                      _hover={{
                        transform: "translateY(-0.2em)",
                        color: hColor,
                      }}
                    />
                  </Box>
                </HStack>
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
