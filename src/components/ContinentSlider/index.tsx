import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import { Slide } from './Slide';

interface Continent {
  id: number;
  title: string;
  description: string;
  continentImage: string;
  slug: string;
}

interface ContinentSliderProps {
  continents: Continent[];
}

export function ContinentSlider({ continents }: ContinentSliderProps) {
  
  return (
    <Flex w="100%" maxW="1240px" mb={['1.5rem','2.5rem']} >
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