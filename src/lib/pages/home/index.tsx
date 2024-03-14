import { Flex } from '@chakra-ui/react';

import Cards from '~/lib/components/Home/Cards';
import Hero from '~/lib/components/Home/Hero';

// import CTASection from '~/lib/components/samples/CTASection';
// import SomeImage from '~/lib/components/samples/SomeImage';
// import SomeText from '~/lib/components/samples/SomeText';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <Hero />
      <Cards />
    </Flex>
  );
};

export default Home;
