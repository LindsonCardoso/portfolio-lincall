import '../styles/globals.css'
import { useEffect } from "react";
import App, { AppProps } from "next/app";
import AppLayout from "../src/components/Layout/AppLayout";
import { ChakraProvider, Box } from '@chakra-ui/react'
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }: AppProps) {

  return(
    <ChakraProvider resetCSS={true}>
      <AppLayout>
          <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
      <Box>
       <Component {...pageProps} />
      </Box>
      </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  ) 
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp
