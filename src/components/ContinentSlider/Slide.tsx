import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideProps {
  continentBgImg: string;
  continentTitle: string;
  continentDescription: string;
  continentSlug: string;
}

export function Slide({
  continentBgImg,
  continentTitle,
  continentDescription,
  continentSlug
}: SlideProps) {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDir='column'
      w='100%'
      h={['15.625rem','28.125rem']}
      textAlign='center'
      bgRepeat='no-repeat'
      bgPosition='center'
      bgSize='cover'
      bgGradient={`linear(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(Continents/${continentBgImg});`}
    >
        <Link href={`/continent/${continentSlug}`}>
          <Text
            fontWeight='700'
            fontSize={['1.5rem','5xl']}
            color='#F5F8FA'
          >
            {continentTitle}
          </Text>
        </Link>
        <Text
          fontWeight='700'
          fontSize={['0.875rem','2xl']}
          color='#F5F8FA'
        >
          {continentDescription}
        </Text>
    </Box>
  )
}