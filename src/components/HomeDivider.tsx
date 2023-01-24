import { Box, Divider } from "@chakra-ui/react";

export function HomeDivider() {
  return (
    <Box display='flex' justifyContent='center'>
      <Divider h='0' w={['3.75rem','5.625rem']} border={['1px','2px']} borderColor='#47585B' mt={['2.25rem','5rem']} mb={['1.5rem','3.25rem']} />
    </Box>
  )
}