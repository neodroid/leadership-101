'use client';

import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Container, Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const LeadershipLesson = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Container maxW="3xl" p="12">
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Button
          onClick={handleBackClick}
          leftIcon={<ArrowBackIcon />}
          colorScheme="blue"
          variant="outline"
        >
          Back
        </Button>
      </Flex>
      <Heading as="h1">The $1 Exercise</Heading>
      <Box marginTop="5">
        <Text as="p" fontSize="lg">
          Walking into class last week, I was oblivious to the challenge that
          awaited. A simple exercise of persuading classmates to line up against
          the wall turned into a profound lesson in leadership, trust, and
          navigating organizational complexities.
        </Text>
        <Text as="p" fontSize="lg" marginTop="5">
          As one of the randomly selected &quot;managers,&quot; the task seemed
          straightforward until it was evident that our &quot;employees&quot;
          had been given conflicting instructions. This information asymmetry
          created an unexpected obstacle, simulating real-world organizational
          challenges.
        </Text>
        <Text as="p" fontSize="lg" marginTop="5">
          The dilemma was whether to disclose the truth about our task or to
          devise an alternate strategy. Opting for honesty, we faced resistance,
          debate, and ultimately, a test of our ability to unite and lead under
          uncertain conditions.
        </Text>
        <Text as="p" fontSize="lg" marginTop="5">
          This experience underscored the criticality of communication and
          trust-building in leadership. Despite the straightforward nature of
          the task, the underlying dynamics revealed the complexity of managing
          change and aligning a team with diverse motivations.
        </Text>
        <Text as="p" fontSize="lg" marginTop="5">
          By confronting these challenges head-on and adhering to our
          principles, we succeeded. The exercise served as a vivid reminder of
          the moral quandaries and political minefields that leaders navigate
          daily. Embracing these challenges and learning from them is crucial
          for continuous improvement and progress in leadership.
        </Text>
      </Box>
    </Container>
  );
};

export default LeadershipLesson;
