import { Text, Flex, Image, Box } from "@chakra-ui/react";

interface CityCardProps {
  city: string;
  country: string;
  cityImagePath: string;
  countryCode: string;
}

export function CityCard({ city, country, cityImagePath, countryCode }: CityCardProps) {
  return (
    <Flex w={['16rem', 'auto']} h={['17.438rem', 'auto']} flexDir='column'>
      <Image borderTopRadius='0.25rem' maxW='100%' src={cityImagePath} alt={city} />
      <Flex borderBottomRadius='4px' borderColor='rgba(255, 186, 8, 0.5)' borderWidth='0px 1px 1px 1px' pt='1.125rem' pb='1.563rem' flexDir='row' justifyContent='space-between' alignItems='center' px='6'>
        <Box>
          <Text color='text.heading' mb='0.75rem' fontWeight='600' fontFamily='Barlow' lineHeight='16px'>{city}</Text>
          <Text color='text.info' fontWeight='500' fontFamily='Barlow' lineHeight='15px'>{country}</Text>
        </Box>
        <Image w='1.875rem' h='1.875rem' alt={country} borderRadius='16px' src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.jpg`} />
      </Flex>
    </Flex>
  )
}