import React, { Fragment, ReactNode } from 'react'
import { motion } from "framer-motion"
import { Box } from "@chakra-ui/react"
import Meta from './Meta';

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string
};

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 }
  };

  export const LayoutPage = ({children, title, description, keywords}: Props): JSX.Element => (
    <Fragment>
      <Meta title={title} description={description} keywords={keywords} />
      <motion.main
        initial="hidden"
        animate="hidden"
        exit='exit'
        variants={variants}
        transition={{type: "linear"}}
        >
          {children}     
      </motion.main>
    </Fragment>

  )