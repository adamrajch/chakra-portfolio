import { Image } from "@chakra-ui/image";
import { HStack, Spacer, Text } from "@chakra-ui/layout";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-scroll";
import MobileDrawer from "./MobileDrawer";
export default function StickyNav(): ReactElement {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 40) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, prevScrollPos]);

  useEffect(() => {
    console.log(visible);
  }, [visible]);

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
    <HStack
      pt="0"
      mt="0"
      // bg="transparent"
      spacing={4}
      pos="fixed"
      top="1rem"
      zIndex={100}
      w="100%"
      justifyContent="flex-end"
      align="center"
      pr={4}
      transition="0.5s"
      transitionTimingFunction="ease-in"
      display={visible ? "flex" : "none"}
    >
      <Image src="/shrek.png" h={[10, 16]} w={[10, 16]} ml="1rem" />
      <Spacer />
      {/* <DarkModeSwitch /> */}
      <HStack spacing={2} fontSize="1.1em">
        {links.map((link) => (
          <Text
            cursor="pointer"
            _hover={{
              color: "blue.300",
            }}
          >
            {" "}
            <Link to={link.ref} spy={true} smooth={true} key={link.ref}>
              {link.title}
            </Link>{" "}
          </Text>
        ))}
      </HStack>
      <MobileDrawer />
    </HStack>
  );
}
