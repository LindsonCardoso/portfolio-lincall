import {
    Flex,
    Avatar,
    Box,
    Text,
    Badge,
    Stack,
    Link,
    UnorderedList,
    ListItem,
    useColorModeValue
  } from "@chakra-ui/react";
  
  import { MotionBox, MotionFlex } from "../ui/motion";
  
  //
  import { Header } from "../Layout/Header";

  //
  import NextLink from 'next/link'

  const ANIMATION_DURATION = 0.5;
  const ORANGE = "#ff9400";


  export const Home = () => {   

    return(
        <Flex direction="column" align="center">  
            <Flex direction={["column", "column", "row"]}>
                <MotionBox
                     opacity="0"
                     initial={{
                       translateX: -150,
                       opacity: 0
                     }}
                     animate={{
                       translateX: 0,
                       opacity: 1,
                       transition: {
                         duration: ANIMATION_DURATION
                       }
                     }}
                     m="auto"
                     mb={[16, 16, "auto"]}
                >
            <Avatar
            size={"2xl"}
            // src={UserIcon}
            src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
            />
              </MotionBox>
              <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
            <Header underlineColor={ORANGE} emoji="👋" mt={0}>
            Hey!
            </Header>

            <Box as="strong"  fontSize="2xl" fontWeight="400" textAlign="left">
                My nameis{" "}
             <Box as="strong" fontWeight="600">
                 Lindson
             </Box> {" "}
                and  I&apos;m a{" "}
                <Box as="span" whiteSpace='nowrap'>
                    Full Stack Developer
                </Box>{" "}
            </Box>
            <Box>
                This is my digital garden, where I write about the things I&apos;m 
            </Box>
            </MotionFlex>
            </Flex>
        </Flex>
    );
  }