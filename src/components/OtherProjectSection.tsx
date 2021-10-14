import Icon from "@chakra-ui/icon";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Link, VStack, Wrap } from "@chakra-ui/layout";
import { ScaleFade, Text, useBreakpointValue } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/tag";
import React, { ReactElement, useRef } from "react";
import { BiCode } from "react-icons/bi";
import { useInViewport } from "react-in-viewport";

export default function OtherProjectSection({ p }: any): ReactElement {
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
          key={p.title}
          p={5}
          borderRadius="md"
          border="3px solid goldenrod"
          _hover={{
            borderColor: "blue.600",
          }}
          w="100%"
          ref={ref}
        >
          <HStack justify="space-between" align="center" mb={2}>
            <Icon as={BiCode} h={[8, 9]} w={[8, 9]} />
            <Link href="#">
              <ExternalLinkIcon
                h={[6, 7]}
                w={[6, 7]}
                _hover={{
                  color: "blue.400",
                  transform: "translateY(-.2rem)",
                }}
              />
            </Link>
          </HStack>
          <VStack align="flex-start">
            <Heading textAlign="left" size="lg">
              {p.title}
            </Heading>

            <Text py={2}>{p.summary}</Text>
            <Wrap spacing={2}>
              {p.tags.map((tag) => (
                <Tag
                  bgColor="transparent"
                  border="1px solid"
                  borderColor="blue.500"
                  variant="outline"
                  size="md"
                  key={tag}
                >
                  {tag}
                </Tag>
              ))}
            </Wrap>
          </VStack>
        </Box>
      </ScaleFade>
    </Box>
  );
}
