import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link } from "react-scroll";
interface Props {}

export default function MobileDrawer({}: Props): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const links = [{}];
  return (
    <>
      <HamburgerIcon h={8} w={8} ref={btnRef} onClick={onOpen} />
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
                <Link to="about" spy={true} smooth={true} onClick={onClose}>
                  About
                </Link>

                <Link to="tech" spy={true} smooth={true} onClick={onClose}>
                  Tech
                </Link>

                <Link to="portfolio" spy={true} smooth={true} onClick={onClose}>
                  Portfolio
                </Link>

                <Link to="contact" spy={true} smooth={true} onClick={onClose}>
                  Contact Me
                </Link>
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
