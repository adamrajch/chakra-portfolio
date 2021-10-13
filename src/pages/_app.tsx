import { Center, ChakraProvider } from "@chakra-ui/react";
import { css } from "@emotion/react";
import "@fontsource/dosis/600.css";
import "@fontsource/exo/400.css";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import "../global.css";
import theme from "../theme";
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <Center>
        <RingLoader
          color="#1894E7"
          loading={loading}
          css={override}
          size={150}
        />
      </Center>
    );
  }
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
