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
  Tooltip,
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
    <Card maxW="sm" boxShadow="4px 4px 5px rgba(0,0,0,0.5)" h="100%">
      <CardBody>
        <Image
          src={linkImagem}
          alt={titulo}
          borderRadius="lg"
          boxSize="250px"
          objectFit="contain"
          m="0 auto"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{titulo}</Heading>
          <Tooltip label={descricao}>
            <Text noOfLines={3}>{descricao}</Text>
          </Tooltip>
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
