'use client';

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Link,
} from '@chakra-ui/react';

export default function CallToActionWithVideo() {
  return (
    <Container maxW="7xl">
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'row', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              Leadership
            </Text>
            <br />
            <Text as="span" color="red.400">
              Takeaways
            </Text>
          </Heading>
          <Text color="gray.500">
            Hello! I&apos;m{' '}
            <Link
              href="https://www.linkedin.com/in/kevinahmad/"
              isExternal
              textDecoration="underline"
            >
              Kevin
            </Link>
            , and I&apos;m thrilled to share the insights I&apos;ve gained from{' '}
            <Link
              href="https://www.linkedin.com/in/nate-pettit-83574b1a/"
              isExternal
              textDecoration="underline"
            >
              Nate&apos;s
            </Link>{' '}
            Leadership class in the Spring 2024 semester at NYU. This
            enlightening journey has opened my eyes to the profound and
            intricate aspects of leadership.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
        >
          <Box
            position="relative"
            rounded="2xl"
            boxShadow="2xl"
            width="full"
            overflow="hidden"
          >
            <Image
              alt="Hero Image"
              fit="cover"
              align="center"
              w="100%"
              h="100%"
              src="first_class_doodle.png"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
