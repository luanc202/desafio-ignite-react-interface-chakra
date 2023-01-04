import { Box, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps{
  icon: 'cocktail' | 'surf' | 'building' | 'museum' | 'earth';
  text: string;
  alt: string;
}

export function TravelType({icon, text, alt}: TravelTypeProps) {
  return (
    <Box display='flex' flexDir='column' alignItems='center'>
      <Image w='5.313rem' h='5.313rem' src={`Icons/${icon}.svg`} alt={alt} />
      <Text mt='1.5rem' fontWeight={600} fontSize='md' color='#47585B'>{text}</Text>
    </Box>
  )
}