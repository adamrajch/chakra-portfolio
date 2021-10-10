import { Container, ContainerProps, useColorMode } from "@chakra-ui/react";

export const Wrapper = (props: ContainerProps) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.50", dark: "gray.900" };
  const color = { light: "black", dark: "white" };

  return (
    <Container
      maxW="container.xl"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      color={color[colorMode]}
      minH="100vh"
      {...props}
    />
  );
};
