import Header from '@/components/Header'
import Produto from '@/components/Produto'
import { Grid, GridItem } from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <Header />
      <Grid templateColumns="repeat(4, 1fr)" m={4} gap={4}>
        <GridItem>
          <Produto
            linkImagem="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            titulo="Sofá verde de 2 lugares"
            descricao="Este sofá é perfeito para espaços tropicais modernos, espaços de inspiração barroca, espaços em tons de terra e para pessoas que adoram um design chique com uma pitada de design vintage."
            preco={950}
          />
        </GridItem>
      </Grid>
    </main>
  )
}
