import { Flex } from '@chakra-ui/react';

import FirstClass from '~/lib/components/Blogs/FirstClass';

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
      <FirstClass />
    </Flex>
  );
};

export default IntroBlog;
