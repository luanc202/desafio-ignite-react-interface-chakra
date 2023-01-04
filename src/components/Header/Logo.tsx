import { Box } from "@chakra-ui/react";
import Image from "next/image";

import logo from 'public/Logo.svg';

export function Logo() {
  return (
    <Box>
      <Image alt='plane logo world trip' src={logo} />
    </Box>
  )
}