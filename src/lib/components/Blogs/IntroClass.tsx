'use client';

import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Container, Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const IntroClass = () => {
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
      <Heading as="h1">Unexpected Lessons in Leadership</Heading>
      <Box marginTop="5">
        <Text as="p" fontSize="lg">
          When I see i enrolled in this class, I didn&apos;t know what to
          expect. I figured it would cover the usual topics like goal-setting,
          delegation, and team-building. But after the first session, I realized
          this class was going to challenge my assumptions and provoke deeper
          introspection.
        </Text>
        <Text as="p" fontSize="lg" marginTop="5">
          The class started with a seemingly innocuous document listing various
          potential pitfalls at the individual, group, and systemic levels. At
          first glance, I thought, &quot;Yeah, yeah, I know all this
          stuff.&quot; But as we unpacked each item, I realized how insidious
          and pervasive these challenges could be.
        </Text>
        <Text as="p" fontSize="lg" marginTop="5">
          At the individual level, the class highlighted the dangers of
          overconfidence, escalating commitment to failing plans, and neglecting
          contingencies. As an ambitious go-getter, I&apos;ve definitely been
          guilty of these tendencies in the past. It was a wake-up call to
          temper my confidence with humility and pragmatism.
        </Text>
        <Text as="p" fontSize="lg" marginTop="5">
          But it was the group and systemic pitfalls that really caught me off
          guard. Things like hierarchical structures hindering communication,
          lack of trust and cohesiveness, and systemic dependencies – these were
          issues I had never fully appreciated. I had always focused on my own
          leadership style and abilities, but this class made me realize that
          even the best individual leader can be undermined by group dynamics
          and external factors.
        </Text>
        <Text as="p" fontSize="lg" marginTop="5">
          As we discussed real-world examples of teams and organizations
          derailed by these pitfalls, I found myself nodding along in
          recognition. It was like someone had finally articulated the elephants
          in the room that so often go unaddressed.
        </Text>
        <Text as="p" fontSize="lg" marginTop="5">
          Leaving that first class, I felt a mix of unease and excitement.
          Unease because I realized how much I still had to learn, and
          excitement because this class was clearly going to challenge me in
          unexpected ways. For once, I didn&apos;t feel like I had all the
          answers. And that&apos;s precisely what I need to become a better,
          more well-rounded leader.
        </Text>
      </Box>
    </Container>
  );
};

export default IntroClass;
