import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function Produto() {
  return (
    <Card maxW="sm" boxShadow="4px 4px 5px rgba(0,0,0,0.5)">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Sofá verde de 2 lugares"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Sofá verde de 2 lugares</Heading>
          <Text>
            Este sofá é perfeito para espaços tropicais modernos, espaços de
            inspiração barroca, espaços em tons de terra e para pessoas que
            adoram um design chique com uma pitada de design vintage.
          </Text>
          <Text color="red.600" fontSize="2xl" textAlign="end">
            R$ 850,00
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justify="end">
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="red">
            Comprar
          </Button>
          <Button variant="ghost" colorScheme="red">
            Adc. ao carrinho
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
