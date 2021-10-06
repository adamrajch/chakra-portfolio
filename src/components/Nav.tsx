import { HStack } from "@chakra-ui/layout";
import React, { ReactElement } from "react";

export default function StickyNav({ children }: any): ReactElement {
  return (
    <HStack
      spacing={4}
      position="sticky"
      top="1rem"
      w="100%"
      justifyContent="flex-end"
      align="center"
      pr={6}
    >
      {children}
    </HStack>
  );
}
