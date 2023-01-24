import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
  icon: 'cocktail' | 'surf' | 'building' | 'museum' | 'earth';
  text: string;
  alt: string;
}

export function TravelType({ icon, text, alt }: TravelTypeProps) {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Box display='flex' flexDir={['row','column']} alignItems='center' w='100%' justifyContent='center' gap='0.5rem'>
      {isWideVersion && (<Image w='5.313rem' h='5.313rem' src={`Icons/${icon}.svg`} alt={alt} />)}
      {!isWideVersion && (<Box w='8px' h='8px' bg='#FFBA08' borderRadius={12}/>)}
      <Text textAlign='center' mt={['0','1.5rem']} fontWeight={600} fontSize='md' color='#47585B'>{text}</Text>
    </Box>
  )
}