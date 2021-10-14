import {
  Box,
  Heading,
  Image,
  ScaleFade,
  Text,
  Tooltip,
  useBreakpointValue,
  Wrap,
} from "@chakra-ui/react";
import React, { ReactElement, useRef } from "react";
import { useInViewport } from "react-in-viewport";

interface Props {}

export default function TechBox({
  summary,
  title,
  images,
  i,
}: any): ReactElement {
  const ref = useRef(null);
  const variant = useBreakpointValue({ base: "-20px", md: "-200px" });

  const { enterCount } = useInViewport(
    ref,
    { rootMargin: variant },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <Box w="100%">
      <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Box
          p={2}
          borderRadius="md"
          w="100%"
          mr="auto"
          my={3}
          border="2px solid"
          borderColor={i == 0 ? "blue.400" : i == 1 ? "red.400" : "goldenrod"}
          ref={ref}
        >
          <Heading textAlign="left">{title}</Heading>
          <Text my={2} color="gray.400">
            {summary}
          </Text>

          <Wrap spacing={4} justify="center" my={8}>
            {images?.map(({ url, name }) => (
              <Tooltip label={name} key={name}>
                <Image
                  key={name}
                  src={url}
                  maxH={["50px", "80px"]}
                  h="auto"
                  w="auto"
                  filter="grayscale(50%)"
                  _hover={{
                    filter: "none",
                    transform: "translateY(-0.5rem)",
                  }}
                />
              </Tooltip>
            ))}
          </Wrap>
        </Box>
      </ScaleFade>
    </Box>
  );
}
