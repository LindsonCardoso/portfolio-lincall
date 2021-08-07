import { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react"

interface Props { 
    color: string;
    h?: string;
    zIndex: number;
}

export const UnderlinedText  = (props: PropsWithChildren<Props>) => (
    <Box as="span" display="inline-block" position="relative">
        {props.children}
        <Box as="span" display="inline-block" position="absolute" bg={'gray.200'} w={'100%'} bottom={-2} />
    </Box>
);
