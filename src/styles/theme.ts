import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        margin: '0px',
        padding: '0px',
        border: '0px',
      }
    }
  },
  colors: {
    text: {
      heading: '#47585B',
      info: '#999999',
    }
  }
});