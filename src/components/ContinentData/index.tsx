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
      alignItems='center'
    >
      <Text
        textAlign='center'
        as='p'
        fontWeight='600'
        fontSize='2xl'
      >
        <Text as='span' color='#FFBA08' fontWeight='600' fontSize='5xl'>{num}<br /></Text>
        <Flex gap='0.3rem'>
          {text}
          {tooltip && (
            <Tooltip hasArrow label={tooltip}>
              <Image src="/info.svg" alt="info icon" />
            </Tooltip>
          )}
        </Flex>
      </Text>
    </Flex>
  )
}