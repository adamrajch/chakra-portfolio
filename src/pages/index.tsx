import { HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import About from "../components/About";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import StickyNav from "../components/Nav";
import SnapSection from "../components/snapSection";
const Index = () => (
  <Box h="100vh" overflowY="scroll" sx={{ scrollSnapType: "y mandatory" }}>
    <StickyNav>
      <DarkModeSwitch />
      <HamburgerIcon h={8} w={8} />
    </StickyNav>

    <SnapSection>
      <Container h="100vh">
        <Hero />
      </Container>
    </SnapSection>
    <SnapSection>
      <About />
    </SnapSection>
    <SnapSection></SnapSection>
    <SnapSection></SnapSection>
  </Box>
);

export default Index;
