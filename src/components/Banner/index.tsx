import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      justifyContent='center'
      w='100%'
      h='21rem'
      bgImg='/Background.png'
      bgRepeat='no-repeat'
      bgPosition='center'
      gap='13rem'
    >
      <Flex
        flexDir='column'
        textColor='#F5F8FA'
        justify='center'
        gap='1.25rem'
      >
        <Text fontWeight='500' fontSize='4xl' noOfLines={2}>5 Continentes,<br />infinitas possibilidades.</Text>
        <Text>Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.</Text>
      </Flex>
      <Box>
        <Image transform='rotate(3deg)' display='inline' mb='-22rem' src='/Airplane.svg' alt='plane logo' />
      </Box>
    </Flex>
  )
}