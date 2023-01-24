import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "./Logo";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex  gap={['7.188rem','28.5rem']} w='100%' align='center' justify='center' h={['3.125rem','6.25rem']} bgColor='#FFFFFF'>
      {asPath !== '/' && <Link href='/'><Image w={['16px', '32px']} h={['16px', '32px']} src='/back-button.svg' alt='back button'/></Link>}
      <Box>
      <Link href='/'><Logo /></Link>
      </Box>
      {asPath !== '/' && <Box></Box>}
    </Flex>
  )
}