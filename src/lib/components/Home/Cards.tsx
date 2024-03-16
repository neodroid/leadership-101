'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import type { ReactElement } from 'react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

interface CardProps {
  heading: string;
  //   description: string;
  icon: ReactElement;
  navigateTo: string;
}

const Card = ({ heading, icon, navigateTo }: CardProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/blog/${navigateTo}`);
  };

  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      cursor="pointer"
      onClick={handleNavigate}
      _hover={{
        borderColor: 'blue.500', // Change to desired hover border color
        boxShadow: 'lg', // Apply a larger shadow on hover
      }}
      transition="all 0.3s ease"
    >
      <Stack align="center" spacing={2}>
        <Flex
          w={16}
          h={16}
          align="center"
          justify="center"
          color="white"
          rounded="md"
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md" textAlign="center">
            {heading}
          </Heading>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Cards() {
  const classSessions = [
    {
      id: 1,
      date: '1/29',
      topic: 'Introduction & Leadership for Others',
      readings: ['What Leaders Really Do (OCP)', 'Mount Everest (OCP)'],
      activities: ['Vision Workshop', 'Pre-class survey'],
      icon: <Icon as={FcManager} w={10} h={10} />,
      navigateTo: 'intro-class',
    },
    {
      id: 2,
      date: '2/5',
      topic: 'Leading Change',
      readings: ['Leading Change: Why Transformation Efforts Fail (OCP)'],
      activities: [
        'In class Management-Worker Exercise',
        '12 Angry Men video (BS)',
      ],
      icon: <Icon as={FcCollaboration} w={10} h={10} />,
      navigateTo: 'second-class',
    },
    {
      id: 3,
      date: '2/12',
      topic: 'Leading by Listening',
      readings: [
        'Barriers and Gateways to Communication (OCP)',
        'Rachel Weldon (BS)',
      ],
      activities: ['In-class Listening Exercise', 'Leadership Ladder Step #1'],
      icon: <Icon as={FcDonate} w={10} h={10} />,
      navigateTo: 'third-class',
    },
    {
      id: 4,
      date: '2/26',
      topic: 'Leading Culture and Inclusivity',
      readings: ['The Failure-Tolerant Leader (OCP)'],
      activities: [
        'Tournament Card Game',
        'The Gold Watch',
        'Leadership Ladder Step #2',
      ],
      icon: <Icon as={FcAssistant} w={10} h={10} />,
      navigateTo: 'fourth-class',
    },
    {
      id: 5,
      date: '3/4',
      topic: 'Design for Influence',
      readings: [],
      activities: [
        'Roller Coaster Ride (OCP)',
        'Arctic Survival',
        'Case Analysis',
      ],
      icon: <Icon as={FcAbout} w={10} h={10} />,
      navigateTo: 'fifth-class',
    },
    {
      id: 6,
      date: '3/11',
      topic: 'Collaboration & Wrap-up',
      readings: ['Outsmart Your Biases (OCP)'],
      activities: ['Murder Mystery', 'Course takeaways due 3/14 by 11:59PM'],
      icon: <Icon as={FcManager} w={10} h={10} />,
      navigateTo: 'last-class',
    },
  ];

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="bold">
          My Journey
        </Heading>
        <Text color="gray.600" fontSize={{ base: 'sm', sm: 'lg' }}>
          The course was not only immensely enjoyable but also profoundly
          enriching, vastly deepening my grasp of leadership principles.
        </Text>
      </Stack>

      <Container maxW="5xl" mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {classSessions.map(({ id, topic, icon, navigateTo }) => (
            <Card
              key={id}
              heading={topic}
              icon={icon}
              navigateTo={navigateTo} //   description={`Readings: ${readings.join(', ')} | Activities: ${activities.join(', ')}`}
              //   href="#" // You can replace "#" with a link to more detailed information if available
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
