import { Flex } from '@chakra-ui/react';

import FourthClass from '~/lib/components/Blogs/FourthClass';

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
      <FourthClass />
    </Flex>
  );
};

export default IntroBlog;
