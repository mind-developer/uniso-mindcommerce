import Header from '@/components/Header'
import Produto from '@/components/Produto'
import { Grid, GridItem } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface Produto {
  id: number
  title: string
  description: string
  category: string
  image: string
  price: number
}

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    async function buscaProdutos() {
      const res = await fetch('https://fakestoreapi.com/products')
      const dados: Produto[] = await res.json()

      setProdutos(dados)
    }

    buscaProdutos()
  }, [])

  return (
    <main>
      <Header />
      <Grid templateColumns="repeat(4, 1fr)" m={4} gap={4}>
        {produtos.map((item) => (
          <GridItem key={item.id}>
            <Produto
              linkImagem={item.image}
              titulo={item.title}
              descricao={item.description}
              preco={item.price}
            />
          </GridItem>
        ))}
      </Grid>
    </main>
  )
}
