import {
    VStack,
    HStack,
    Heading,
    Text,
    Tag,
    Link,
    Tooltip,
    useColorModeValue,
    Flex,
    Image
  } from "@chakra-ui/react";
  import NextLink from 'next/link'
  import { getTagColor } from "../ui/theme";
  //chamando o UIX transition
  import { CardTransition } from "../ui/page-transition";
  //importando interface tipada 
  import { BlogPost } from '../../../interfaces/interface'
  import moment from 'moment'

  interface IProps {
      post: BlogPost;
  }


  