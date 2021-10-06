import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

export default function SnapSection({ children, props }: any): ReactElement {
  return (
    <Box h="100vh" sx={{ scrollSnapAlign: "start" }} {...props}>
      {children}
    </Box>
  );
}
