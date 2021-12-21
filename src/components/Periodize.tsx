import {
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Wrapper } from "./Wrapper";

export default function Periodize(): ReactElement {
  return (
    <Wrapper maxW={["", "container.md", "container.lg"]} id="periodize">
      <Heading>Periodize</Heading>
      <Image
        h="auto"
        w="auto"
        maxH={["35vh", "50vh"]}
        src="/periodizeCreate.png"
        p={4}
        borderRadius="md"
        my={{ base: 4, xl: 0 }}
      />

      <Text>
        Periodize innovates the fitness tech space with a unique approach to
        training. Most fitness apps on the market are logging/tracking apps, or
        premade cookie cutter programs and video guides. Periodize aims to fill
        the void in high end performance programming for the average user. Many
        strength athletes pay top dollar for coaching and programming. With
        periodize, you can create in-depth fitness templates with ease. In the
        mobile app, you will be able to subscribe to these programs, and the app
        will help regulate training with user feedback
      </Text>

      <Flex px={2} py={2}>
        <UnorderedList>
          <ListItem>
            The only tool that can create sophisticated training programs with
            exercise science and periodization logic
          </ListItem>
          <ListItem>
            Find programs based on category, interest, and experience level
          </ListItem>
          <ListItem>Comment and 'Like' system</ListItem>
          <ListItem>Educational articles/blog Posts created with MDX</ListItem>
          <ListItem>
            Future feature: subscribe to programs via mobile app as a training
            assistant
          </ListItem>
        </UnorderedList>

        <UnorderedList>
          <ListItem>
            Authentication + Cookies Security made with Firebase Auth
          </ListItem>
          <ListItem>Backend with Firebase Cloud Firestore</ListItem>
          <ListItem>Frontend made with Mantine UI</ListItem>
          <ListItem>SSR with NextJS</ListItem>
        </UnorderedList>
      </Flex>
    </Wrapper>
  );
}
