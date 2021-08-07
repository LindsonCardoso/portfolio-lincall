import { Box } from "@chakra-ui/react"
import React, { Fragment } from "react"
import NavBar from "./NavBar"

export default function AppLayout(props: any) {


  
  return(
    <Fragment>
        <NavBar/>
        <Box
        textAlign="center"
        fontSize="xl"
        w={["90%", "85%", "80%"]}
        maxW={800}
        mx="auto"
        >
          <Box pt={'7rem'} pb={10}>
          {props.children}
        </Box>
        </Box>
    </Fragment>
    );
}