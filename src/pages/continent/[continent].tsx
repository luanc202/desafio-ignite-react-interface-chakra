import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { CityCard } from "../../components/CityCard";
import { ContinentData } from "../../components/ContinentData";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface ContinentId {
  id: string;
}

interface ContinentInfo {
  continent: {
    id: string;
    title: string;
    longDescription: string;
    continentImage: string;
    countriesNum: number;
    languagesNum: number;
    citiesNum: number;
    cities: [
      {
        city: string;
        country: string;
        cityImagePath: string;
        countryCode: string;
      }
    ];
  }
}

export default function Continent({ continent }: ContinentInfo) {
  return (
    <>
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" display="flex" flexDir="column" alignItems="center">
        <Flex
          w={['100%','100%', '8xl']}
          h={['9.375rem', 'lg']}
          bgRepeat='no-repeat'
          bgPosition='center'
          bgSize='auto 300%'
          bgGradient={`linear(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/Continents/${continent.continentImage});`}
          flexDir='column-reverse'
          textAlign={['center', 'left']}
          justifyContent={['center', 'normal']}
        >
          <Text
            fontWeight='600'
            fontSize={['1.75rem', '5xl']}
            color='#F5F8FA'
            ml={['0', '8.75rem']}
            mb={['0', '3.688rem']}
          >{continent.title}</Text>
        </Flex>
        <Box mt={['1.5rem', '20']} maxW='72.5rem'>
          <Flex
            flexDir={['column','column', 'row']}
            gap={['1rem', '4.375rem']}
            alignItems='center'
          >
            <Text
              maxW='37.5rem'
              fontWeight='400'
              fontSize={['0.875rem', '2xl']}
              textAlign='justify'
              lineHeight={['1.313rem', '9']}
              mx={['1rem', '0']}
            >
              {continent.longDescription}
            </Text>
            <Flex ml={['1rem', '0']} placeSelf={['start', 'auto']} flexDir='row' gap='2.625rem'>
              <ContinentData num={continent.countriesNum} text={"países"} />
              <ContinentData num={continent.languagesNum} text={"línguas"} />
              <ContinentData num={continent.citiesNum} text={"cidades+100"} tooltip='Cidades além das programadas para turismo' />
            </Flex>
          </Flex>
        </Box>

        <Box w={['100%','72.5rem']}>
          <Text ml={['1rem', '0']} alignSelf='start' mt={['2rem', '5rem']} fontWeight='500' fontSize={['1.5rem', '4xl']}>Cidades +100</Text>
        </Box>

        <Box mt={['2rem', 20]} maxW='72.5rem' w={['auto','auto', '72.5rem']} mb={['1rem','2.188rem']}>
          <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={['1.25rem', '2.813rem']}>
            {continent.cities.map((city) => {
              return (
                <GridItem key={city.city}>
                  <CityCard city={city.city} country={city.country} cityImagePath={city.cityImagePath} countryCode={city.countryCode} />
                </GridItem>
              )
            })}
          </Grid>
        </Box>
      </Flex>
    </>
  )
}

export async function getStaticPaths() {
  const res = await api.get('/continents');
  const continents = res.data;

  const paths = continents.map((continent: { slug: string }) => {
    return {
      params: { continent: continent.slug },
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { continent: ContinentId; }; }) {
  const continentId = context.params.continent
  const response = await api.get(`/continents/${continentId}`);
  const continent = {
    id: response.data.id,
    title: response.data.title,
    longDescription: response.data.longDescription,
    continentImage: response.data.continentImage,
    countriesNum: response.data.countriesNum,
    languagesNum: response.data.languagesNum,
    citiesNum: response.data.citiesNum,
    cities: response.data.cities,
  };

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 48, //48horas
  };
};