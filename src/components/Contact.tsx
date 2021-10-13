import {
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
export default function Contact(): ReactElement {
  const { hasCopied, onCopy } = useClipboard("arajchwald@gmail.com");
  const color = useColorModeValue("blue.600", "white");
  const hColor = useColorModeValue("blue.300", "blue.300");
  return (
    <Flex textAlign="center" flexDir="column" align="center" h="40vh" mt={36}>
      <Container>
        <Heading id="contact">Get in touch ✉️</Heading>
        <Text my={4} fontSize={["0.8rem", "1rem"]}>
          Got a question or an idea? My inbox is always open{" "}
        </Text>

        <Text fontSize="xl" color="blue.400">
          arajchwald@gmail.com
        </Text>
        <HStack
          align="center"
          justify="center"
          spacing={4}
          my={4}
          display={{
            base: "inline-block",
            xl: "none",
          }}
        >
          <Link href="https://github.com/adamrajch" target="_blank">
            <Icon
              as={AiOutlineGithub}
              cursor="pointer"
              w={7}
              h={7}
              _hover={{ transform: "translateY(-0.2em)", color: hColor }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/adamrajchwald/"
            target="_blank"
          >
            <Icon
              as={AiOutlineLinkedin}
              cursor="pointer"
              w={7}
              h={7}
              _hover={{ transform: "translateY(-0.2em)", color: hColor }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/tendon_mcgee/?hl=en"
            target="_blank"
          >
            <Icon
              as={AiOutlineInstagram}
              cursor="pointer"
              w={7}
              h={7}
              _hover={{ transform: "translateY(-0.2em)", color: hColor }}
            />
          </Link>
        </HStack>
      </Container>
      <Text textAlign="center" py={2} mb={6} mt="auto">
        🔨 Built different by Adam Rajchwald
      </Text>
    </Flex>
  );
}
