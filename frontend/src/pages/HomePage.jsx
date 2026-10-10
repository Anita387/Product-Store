import { Container, VStack, Text, Link } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useProductStore } from "../store/product";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  // useEffect(() => {} , [])
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);

  return (
    <Container maxW="container.xl" py={"20"}>
      <VStack spacing={8}>
        <Text
          fontSize={"4xl"}
          fontFamily="'Baloo Bhai 2', sans-serif"
          fontWeight={"bold"}
          bgGradient="to-r"
          gradientFrom="#ff0000"
          gradientTo="#f36e6e"
          bgClip="text"
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacing={10}
          w={"full"}
        ></SimpleGrid>
        <Text
          fontSize={"xl"}
          textAlign={"center"}
          fontFamily="'Baloo Bhai 2', sans-serif"
          fontWeight={"thin"}
          color="gray.500"
          mt={"20px"}
        >
          No Products Available{" "}
          <Link
            href="/create"
            color="red.500"
            _hover={{ textDecoration: "underline" }}
          >
            Click Here{" "}
          </Link>{" "}
          to add products
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
