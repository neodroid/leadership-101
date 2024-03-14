import { Flex } from '@chakra-ui/react';

import IntroClass from '~/lib/components/Blogs/IntroClass';

const IntroBlog = () => {
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
      <IntroClass />
    </Flex>
  );
};

export default IntroBlog;
