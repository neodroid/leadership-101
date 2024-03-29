import { Flex } from '@chakra-ui/react';

import SecondClass from '~/lib/components/Blogs/SecondClass';

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
      <SecondClass />
    </Flex>
  );
};

export default IntroBlog;
