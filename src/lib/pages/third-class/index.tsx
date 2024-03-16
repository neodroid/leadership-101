import { Flex } from '@chakra-ui/react';

import ThirdClass from '~/lib/components/Blogs/ThirdClass';

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
      <ThirdClass />
    </Flex>
  );
};

export default IntroBlog;
