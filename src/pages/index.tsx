import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { BsCart2 } from 'react-icons/bs'

export default function Home() {
  return (
    <main>
      <Box h="75px" px="5%" boxShadow="0 4px 5px rgba(0,0,0,0.5)">
        <Flex h="100%" justify="space-between" align="center">
          <Text color="red" fontWeight="bold" fontSize="3xl">
            Mindcommerce
          </Text>
          <Button colorScheme="red" leftIcon={<BsCart2 />}>
            Carrinho
          </Button>
        </Flex>
      </Box>
    </main>
  )
}
