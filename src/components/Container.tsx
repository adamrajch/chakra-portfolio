import { Flex, FlexProps, useColorMode } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.50", dark: "gray.900" };
  const color = { light: "black", dark: "white" };
  const bgI = {
    light: "url('https://wallpapercave.com/wp/wp3589868.jpg')",
    dark: "url('https://wallpaperaccess.com/full/1268171.jpg')",
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bgImage={bgI[colorMode]}
      color={color[colorMode]}
      {...props}
      bgSize="cover"
    />
  );
};
