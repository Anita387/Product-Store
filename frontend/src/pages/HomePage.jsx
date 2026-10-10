import { Container , VStack , Text } from "@chakra-ui/react";


const HomePage = () => {
  return (
    <Container maxW = "container.xl" py = {"20"}>
      <VStack spacing = {8}>
        <Text fontSize = {"4xl"} 
              fontFamily="'Baloo Bhai 2', sans-serif"
              fontWeight = {"bold"}
              bgGradient="to-r"
              gradientFrom="#ff0000"
              gradientTo="#f36e6e"
              bgClip='text'>
                
                Current Product</Text>

      </VStack>
    </Container>
  )
}

export default HomePage;