import { VStack,Heading,Container, Box, Button , Input} from '@chakra-ui/react';
import {useState} from 'react';
import { useColorModeValue } from "../components/ui/color-mode";
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct,setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  })

  const {createProduct} = useProductStore()
  
  const handelAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("success:", success);
    console.log("message:", message);
};

  return (
    <Container maxW={'container.sm'} >
      <VStack  w="full" padding="10">
        {/* mb = margin btm */}
        <Heading as={"h1"} size={"4xl"} textAlign={"center"} mb={8} color={'red.500'}>
          Create New Product
          </Heading>
        <Box w={"full"} bg={useColorModeValue('#fd898942', 'gray.800')} p={4} rounded={"lg"} shadow={"md"} padding="5" >
          <VStack padding={5} >
            <Input placeholder="Product Name" name='name' value={newProduct.name}  onChange={(e) => setNewProduct({...newProduct,name:e.target.value})} mb={4} />
            <Input placeholder="Price" name='price' type='number' value={newProduct.price}  onChange={(e) => setNewProduct({...newProduct,price:e.target.value})} mb={4}/>
            <Input placeholder="Image URL" name='image' value={newProduct.image}  onChange={(e) => setNewProduct({...newProduct,image:e.target.value})} mb={8}/>
            <Button colorPalette={"red"} onClick={handelAddProduct} w="full"> Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}


export default CreatePage;