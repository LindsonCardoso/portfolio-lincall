import { Box, BoxProps  } from '@chakra-ui/react'
import { PropsWithChildren } from 'react';

import { UnderlinedText } from '../ui/underlined-text'

interface Props extends BoxProps {
    underlineColor?: string;
    emoji?: string;
  }

export const Header = ({ children, underlineColor,emoji, ...props}: PropsWithChildren<Props>) =>(
        <Box 
            as='h1' 
            mt={10} 
            mb={6} 
            fontSize='3x1'
            lineHeight="shorter" 
            fontWeight="bold"

            {...props}
            textAlign="left" 
        >
        
            <UnderlinedText  color={underlineColor}>
            {children}

            {emoji ? '' + emoji : ''}
            </UnderlinedText  >
        
        </Box>
);
