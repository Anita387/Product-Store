// rafce
import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { TbLibraryPlus } from "react-icons/tb";

const Navbar = () => {
  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{ base: 'column', sm: 'row' }}
      >
        <Text
          fontSize={{ base: '25px', sm: '28px' }}
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
              backgroundImage="linear-gradient(to right, #ff0000, #fdcf58)"
              color="white"
              _hover={{
                backgroundImage: "linear-gradient(to right, #fdce58f6, #ff0000f8)"
              }}
              borderWidth="1px"
            >
              <TbLibraryPlus />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;