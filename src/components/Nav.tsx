import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { HStack, Spacer, Text } from "@chakra-ui/layout";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-scroll";
import MobileDrawer from "./MobileDrawer";
export default function StickyNav(): ReactElement {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const navColor = useColorModeValue("gray.100", "#13181af2");
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (window.scrollY > 100) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
    // set state based on location info (explained in more detail below)

    // set state to new scroll position
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 40);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, prevScrollPos, handleScroll]);

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
      py="0.5em"
      mt="0"
      spacing={4}
      bg={isTop ? "transparent" : navColor}
      pos="fixed"
      top="0"
      zIndex={100}
      w="100%"
      justifyContent="flex-end"
      align="center"
      pr={4}
      transition="0.5s"
      transitionTimingFunction="ease-in"
      display={visible ? "flex" : "none"}
      boxShadow={isTop ? "none" : " 0px 0px 5px #000"}
    >
      <Link to="home" spy={true} smooth={true}>
        <Image src="/shrek.png" h={[10, 16]} w={[10, 16]} ml="1rem" />
      </Link>
      <Spacer />
      {/* <DarkModeSwitch /> */}
      <HStack
        spacing={4}
        fontSize="1.1em"
        display={{ base: "none", xl: "flex" }}
        pr="2rem"
      >
        {links.map((link) => (
          <Text
            cursor="pointer"
            _hover={{
              color: "blue.300",
            }}
            key={link.ref}
            fontWeight="bold"
          >
            <Link to={link.ref} spy={true} smooth={true}>
              {link.title}
            </Link>
          </Text>
        ))}
      </HStack>
      <MobileDrawer />
    </HStack>
  );
}
