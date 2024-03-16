import { Flex } from '@chakra-ui/react';

import FifthClass from '~/lib/components/Blogs/FifthClass';

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
      <FifthClass />
    </Flex>
  );
};

export default IntroBlog;
