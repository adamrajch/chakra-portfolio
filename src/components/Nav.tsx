import { HStack } from "@chakra-ui/layout";
import React, { ReactElement } from "react";

export default function StickyNav({ children }: any): ReactElement {
  return (
    <HStack
      pt="0"
      mt="0"
      bg="transparent"
      spacing={4}
      pos="fixed"
      top="1rem"
      w="100%"
      justifyContent="flex-end"
      align="center"
      pr={2}
    >
      {children}
    </HStack>
  );
}
