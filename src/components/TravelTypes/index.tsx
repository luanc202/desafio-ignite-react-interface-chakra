import { Grid } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Grid
      mt={['2.25rem', '7.125rem']}
      alignItems='center'
      templateColumns={['repeat(2, 1fr)', 'repeat(5, 1fr)']}
      gap={['8', '16', '24']}
      justifyItems="center"
    >

      <TravelType icon='cocktail' text='vida nortuna' alt='cocktail  icon' />
      <TravelType icon='surf' text='praia' alt='surfboard icon' />
      <TravelType icon='building' text='moderno' alt='building icon' />
      <TravelType icon='museum' text='clássico' alt='museum icon' />
      <TravelType icon='earth' text='e mais...' alt='earth icon' />

    </Grid>
  )
}