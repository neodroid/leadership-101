import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        Made with ❤️ by{' '}
        <Link
          href="https://www.linkedin.com/in/kevinahmad/"
          isExternal
          rel="noopener noreferrer"
          variant="brandPrimary"
          color="purple"
        >
          Kevin Faisal
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
