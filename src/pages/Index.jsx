import { Container, VStack, Heading, Text, Box, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>Welcome to Cat World</Heading>
          <Text fontSize="lg">Discover various cat breeds, learn how to take care of your feline friends, and enjoy a gallery of adorable cat images.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Cat Breeds</Heading>
          <Text fontSize="md">Explore different cat breeds and their unique characteristics.</Text>
          {/* Add more content about cat breeds here */}
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Cat Care Tips</Heading>
          <Text fontSize="md">Learn how to take care of your cats with our comprehensive tips and guides.</Text>
          {/* Add more content about cat care tips here */}
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Gallery</Heading>
          <Text fontSize="md" mb={4}>Enjoy a collection of cute and adorable cat images.</Text>
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            <Image src="https://via.placeholder.com/300" alt="Cat 1" />
            <Image src="https://via.placeholder.com/300" alt="Cat 2" />
            <Image src="https://via.placeholder.com/300" alt="Cat 3" />
            <Image src="https://via.placeholder.com/300" alt="Cat 4" />
            <Image src="https://via.placeholder.com/300" alt="Cat 5" />
            <Image src="https://via.placeholder.com/300" alt="Cat 6" />
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Popular Cat Brands</Heading>
          <Text fontSize="md" mb={4}>Discover some of the most popular cat brands that offer quality products for your feline friends.</Text>
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            <Box>
              <Image src="https://via.placeholder.com/300" alt="Brand 1" />
              <Heading as="h3" size="md" mt={2}>Brand 1</Heading>
              <Text fontSize="sm">Description of Brand 1.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/300" alt="Brand 2" />
              <Heading as="h3" size="md" mt={2}>Brand 2</Heading>
              <Text fontSize="sm">Description of Brand 2.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/300" alt="Brand 3" />
              <Heading as="h3" size="md" mt={2}>Brand 3</Heading>
              <Text fontSize="sm">Description of Brand 3.</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;