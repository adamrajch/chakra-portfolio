import { Box, BoxProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";

export default function SnapSection(props: BoxProps): ReactElement {
  return <Box h="100vh" sx={{ scrollSnapAlign: "start" }} {...props} />;
}
