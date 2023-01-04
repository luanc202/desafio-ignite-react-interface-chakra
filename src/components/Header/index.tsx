import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header() {

  return (
    <Flex as='header' w='100%' align='center' justify='center' h='6.25rem' bgColor='#FFFFFF'>
      <Box>
        <Logo />
      </Box>
    </Flex>
  )
}