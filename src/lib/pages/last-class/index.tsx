import { Flex } from '@chakra-ui/react';

import LastClass from '~/lib/components/Blogs/LastClass';

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
      <LastClass />
    </Flex>
  );
};

export default IntroBlog;
