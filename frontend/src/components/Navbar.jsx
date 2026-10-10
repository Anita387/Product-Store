// rafce
import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { TbLibraryPlus } from "react-icons/tb";
import { useColorMode, useColorModeValue } from './ui/color-mode';
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Container  maxW={'100%'} px={10} bg={useColorModeValue('#fd898942', 'gray.800')}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{ base: 'column', sm: 'row' }}
      >
        <Text
          fontSize={{ base: '25px', sm: '28px' }}
          fontFamily="'Baloo Bhai 2', sans-serif"
          fontWeight={'bold'}
          textTransform={'uppercase'}
          textAlign={'center'}
          bgGradient="to-r"
          gradientFrom="#ff0000"
          gradientTo="#fdcf58"
          bgClip='text'
        >
          <Link to={'/'} style={{ color: 'transparent' }}>
            Product Store
          </Link>
        </Text>

        <HStack spacing={2} alignItems={'center'}>
          <Link to={'/create'}>
            <Button
              p={3}
              bg={useColorModeValue("rgba(255, 0, 0, 0.01)", 'gray.700')}
              color="black"
              _hover={{
                 bg:"red.400"
              }}
              borderWidth="2px"
              borderColor="rgba(255, 0, 0, 0.11)"
            >
              <TbLibraryPlus />
            </Button>
          </Link>
          <Button onClick={toggleColorMode} background={"white"} color={"black"}>
            {colorMode === 'light' ? <IoMoon />:<LuSun sizee="20"/>} 

          </Button>
        </HStack>
      </Flex>
    </Container>
  );
} 

export default Navbar;