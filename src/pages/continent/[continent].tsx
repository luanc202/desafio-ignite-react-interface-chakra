import { Box, Flex, Text } from "@chakra-ui/react";
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
      }
    ];
  }
}

export default function Continent({continent}: ContinentInfo) {
  return (
    <>
      <Header />
      <Flex w="100vw" maxW={1480} mx="auto" display="flex" flexDir="column" alignItems="center">
        <Flex
          w='8xl'
          h="lg"
          bgRepeat='no-repeat'
          bgPosition='center'
          bgGradient={`linear(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/Continents/${continent.continentImage});`}
          flexDir='column-reverse'
        >
          <Text
            fontWeight='600'
            fontSize='5xl'
            color='#F5F8FA'
            ml='8.75rem'
            mb='3.688rem'
          >{continent.title}</Text>
        </Flex>
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

  console.log(continent);


  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 48, //48horas
  };
};