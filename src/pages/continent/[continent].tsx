import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";

export default function Continent() {
  const route = useRouter();
  const { continent } = route.query;

  return (
    <>
    <Header />
    <Box>
      <Text>Continent</Text>
    </Box>
    </>
  )
}