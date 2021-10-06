import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Wrapper } from "./Wrapper";

export default function About(): ReactElement {
  return (
    <Wrapper>
      <Flex align="center">
        <Container display="flex" flexDir="column">
          <Heading as="h4" size="lg">
            Expert Web Developer & Designer
          </Heading>
          <Heading>About Me</Heading>
          <Box w="20%" borderBottom="2px solid white" />
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            suscipit, est sed eligendi molestiae odio provident id mollitia
            atque, illum culpa ipsum hic unde. Consequuntur odit blanditiis
            dicta ea tenetur!
          </Text>
          <Box>
            <Button>Download Resume</Button>
          </Box>
        </Container>
        <Image
          boxSize="sm"
          src="https://blogs.forbes.com/olliebarder/files/2018/12/dbs_broly_1.jpg"
          p={4}
          border="1px solid grey"
        />
      </Flex>
    </Wrapper>
  );
}
