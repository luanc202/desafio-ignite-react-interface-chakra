import { Box, Flex, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import { Slide } from './Slide';

interface Continent {
  id: string,
  title: string,
  description: string,
  continentImage: string,
  slug: string,
}

export function ContinentSlider() {
  const continents: Continent[] = [
    {
      id: '1',
      title: 'Europa',
      description: 'O continente mais antigo.',
      continentImage: 'europe.jpg',
      slug: 'europe',
    },
    {
      id: '2',
      title: 'América do Norte',
      description: 'A terra dos imigrantes.',
      continentImage: 'northamerica.jpg',
      slug: 'northamerica',
    },
    {
      id: '3',
      title: 'América do Sul',
      description: 'O continente tropical.',
      continentImage: 'southamerica.jpg',
      slug: 'southamerica',
    },
    {
      id: '4',
      title: 'Ásia',
      description: 'Uma experiência cultural exótica.',
      continentImage: 'asia.jpg',
      slug: 'asia',
    },
    {
      id: '5',
      title: 'África',
      description: 'Visite as belezas naturais.',
      continentImage: 'africa.jpg',
      slug: 'africa',
    },
    {
      id: '6',
      title: 'Oceania',
      description: 'Desbrave o continente além do mar.',
      continentImage: 'oceania.jpg',
      slug: 'oceania',
    },
  ];

  return (
    <Flex w="100%" maxW="1240px" mb='2.5rem'>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Slide
              continentBgImg={continent.continentImage}
              continentTitle={continent.title}
              continentDescription={continent.description}
              continentSlug={continent.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}