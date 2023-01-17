import { Box, Grid, GridItem } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Grid mt='7.125rem' templateColumns='repeat(5, 1fr)' gap='36' >

        <TravelType icon='cocktail' text='vida nortuna' alt='cocktail  icon' />
        <TravelType icon='surf' text='praia' alt='surfboard icon' />
        <TravelType icon='building' text='moderno' alt='building icon' />
        <TravelType icon='museum' text='clássico' alt='museum icon' />
        <TravelType icon='earth' text='e mais...' alt='earth icon' />
        
    </Grid>
  )
}