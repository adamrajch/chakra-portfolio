import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { GiBiceps } from "react-icons/gi";
import { RiComputerLine, RiPlantLine } from "react-icons/ri";
import { Wrapper } from "./Wrapper";
export default function About(): ReactElement {
  return (
    <Wrapper maxW={["", "container.md", "container.xl"]}>
      <Flex
        align="center"
        flexDir={{ base: "column-reverse", xl: "row" }}
        justifyContent="space-around"
      >
        <Container display="flex" flexDir="column" maxW="2xl">
          <Heading mt={2}>README.md</Heading>
          <Box w="20%" borderBottom="2px solid white" mb={2} />
          <Heading as="h4" size="md" mb={3}>
            Expert Web Developer
          </Heading>
          <VStack
            as="ul"
            align="flex-start"
            textAlign="left"
            mb={5}
            spacing={0}
          >
            <HStack>
              <Icon h={7} w={7} as={RiPlantLine} />
              <Text> Currently Learning: React Native</Text>
            </HStack>
            <HStack>
              <Icon h={7} w={7} as={RiComputerLine} />
              <Text> Favorite Stack: NextJS, Firebase, ChakraUI</Text>
            </HStack>
            <HStack>
              <Icon h={7} w={7} as={GiBiceps} />
              <Text> Competitive Armwrestler</Text>
            </HStack>
          </VStack>
          <Text>
            I have always been an avid learner and problem solver. I am
            experienced with making full stack web applications in the vast
            Javascript ecosystem. Making responsive and elegant UI with smooth
            user experience is a priority for me as a developer. Versed with
            various backend technologies I am confident to be able to adapt any
            project depending on the vendor or stack.
          </Text>
        </Container>
        <Image
          h="auto"
          w="auto"
          maxH={["", "50vh"]}
          src="https://blogs.forbes.com/olliebarder/files/2018/12/dbs_broly_1.jpg"
          p={4}
          borderRadius="md"
          border="2px solid"
          _hover={{
            borderColor: "blue.400",
          }}
        />
      </Flex>
    </Wrapper>
  );
}
