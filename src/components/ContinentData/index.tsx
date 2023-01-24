import { Image, Flex, Text, Box, Grid, GridItem, Tooltip } from "@chakra-ui/react";

interface ContinentDataProps {
  num: number;
  text: string;
  tooltip?: string;
}

export function ContinentData({ num, text, tooltip }: ContinentDataProps) {
  return (
    <Flex
      flexDir='column'
      alignItems={['start','center']}
    >
        <Text as='span' color='#FFBA08' fontWeight='600' fontSize={['1.5rem','5xl']} lineHeight='2.25rem'>{num}<br /></Text>
        <Flex gap='0.3rem'>
          <Text fontWeight={['400','600']} fontSize={['1.125rem','1.5rem']} lineHeight={['1rem','4.5rem']}>{text}</Text>
          {tooltip && (
            <Tooltip hasArrow label={tooltip}>
              <Image src="/info.svg" alt="info icon" />
            </Tooltip>
          )}
        </Flex>
    </Flex>
  )
}