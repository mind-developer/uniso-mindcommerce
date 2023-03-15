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

interface Props {
  titulo: string
  descricao: string
  linkImagem: string
  preco: number
}

export default function Produto({
  titulo,
  descricao,
  linkImagem,
  preco,
}: Props) {
  return (
    <Card maxW="sm" boxShadow="4px 4px 5px rgba(0,0,0,0.5)">
      <CardBody>
        <Image src={linkImagem} alt={titulo} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{titulo}</Heading>
          <Text>{descricao}</Text>
          <Text color="red.600" fontSize="2xl" textAlign="end">
            {`R$ ${preco}`}
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
