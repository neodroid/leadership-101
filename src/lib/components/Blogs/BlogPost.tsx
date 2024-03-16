// Import necessary components and hooks from Chakra UI and Next.js
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Container, Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation'; // Notice the corrected import for useRouter
import type { FC } from 'react';

// Define TypeScript interface for props
interface BlogPostProps {
  title: string;
  paragraphs: string[];
}

// Create the reusable BlogPost component
const BlogPost: FC<BlogPostProps> = ({ title, paragraphs }) => {
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
      <Heading as="h1">{title}</Heading>
      <Box marginTop="5">
        {paragraphs.map((paragraph, index) => (
          <Text as="p" fontSize="lg" marginTop={index > 0 ? 5 : 0}>
            {paragraph}
          </Text>
        ))}
      </Box>
    </Container>
  );
};

export default BlogPost;
