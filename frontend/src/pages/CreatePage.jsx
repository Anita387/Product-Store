import { VStack,Heading,Container, Box, Button , Input} from '@chakra-ui/react';
import {useState} from 'react';
import { useColorModeValue } from "@/components/ui/color-mode";
const CreatePage = () => {
  const [newProduct,setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  })
  const handelAddProduct = () => {
    console.log(newProduct)
  }
  return (
    <Container maxW='50%'>
      <VStack spacing={8}>
        {/* mb = margin btm */}
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} mt={8}>
          Create New Product
          </Heading>
        <Box w={"full"} bg={useColorModeValue('#fd898942', 'gray.800')} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={10} >
            <input placeholder="Product Name" name='name' value={newProduct.name}  onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})} />
            <input placeholder="Price" name='price' type='number' value={newProduct.price}  onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})} />
            <input placeholder="Image URL" name='image' value={newProduct.image}  onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})} />
            <Button colorScheme={"blue"} onClick={handelAddProduct} w="full"> Add Product</Button>
          </VStack>
        </Box>

      </VStack>
    </Container>
  )
}

export default CreatePage;