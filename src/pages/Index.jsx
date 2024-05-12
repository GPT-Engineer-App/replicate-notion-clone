import { Box, Container, Flex, IconButton, Input, Text, VStack, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { FaMoon, FaSun, FaBars, FaPlus } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const navColor = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="100%" p={0} height="100vh">
      <Flex height="100%">
        {/* Sidebar */}
        <Box width="250px" bg={navColor} p={4} color="white">
          <VStack align="start" spacing={4}>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} aria-label="Toggle theme" />
            <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
              New Note
            </Button>
            <Text fontSize="lg" fontWeight="bold">
              Notes
            </Text>
            <Box as="nav">
              <VStack align="start" spacing={2}>
                <Button justifyContent="start" variant="ghost" width="full">
                  Note 1
                </Button>
                <Button justifyContent="start" variant="ghost" width="full">
                  Note 2
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Box>

        {/* Main content */}
        <Flex direction="column" flex="1" p={4} bg={bgColor}>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontSize="2xl" fontWeight="bold">
              Note Title
            </Text>
            <IconButton icon={<FaBars />} aria-label="Options" />
          </Flex>
          <Input placeholder="Title" size="lg" mb={3} />
          <Input placeholder="Type your note here..." size="lg" variant="filled" height="70vh" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
