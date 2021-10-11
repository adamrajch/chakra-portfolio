import { HStack } from "@chakra-ui/layout";
import React, { ReactElement, useEffect, useState } from "react";

export default function StickyNav({ children }: any): ReactElement {
  const [show, setShow] = useState(true);
  function controlNav() {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  if (show) {
    return (
      <HStack
        pt="0"
        mt="0"
        // bg="transparent"
        spacing={4}
        pos="fixed"
        top="1rem"
        w="100%"
        justifyContent="flex-end"
        align="center"
        pr={4}
        transition="0.5s"
        transitionTimingFunction="ease-in"
      >
        {children}
      </HStack>
    );
  }
}
