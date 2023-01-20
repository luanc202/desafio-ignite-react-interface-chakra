import { Box, Text, Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { ContinentSlider } from "../components/ContinentSlider";
import { Header } from "../components/Header";
import { HomeDivider } from "../components/HomeDivider";
import { TravelTypes } from "../components/TravelTypes";
import { api } from "../services/api";

interface Continent {
  id: number;
  title: string;
  description: string;
  continentImage: string;
  slug: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>worldtrip</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100vw" maxW={1480} mx="auto" display="flex" flexDir="column" alignItems="center">
        <Header />

        <Banner />

        <TravelTypes />

        <HomeDivider />

        <Box display="flex" justifyContent="center" mb="3.25rem">
          <Text fontWeight="500" fontSize="2.25rem" textAlign="center">
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </Box>

        <ContinentSlider continents={continents} />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents');
  const continents = response.data;  

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 48, //48horas
  };
};
