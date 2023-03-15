import Header from '@/components/Header'
import Produto from '@/components/Produto'
import { Grid, GridItem } from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <Header />
      <Grid templateColumns="repeat(4, 1fr)" m={4} gap={4}>
        <GridItem>
          <Produto />
        </GridItem>
        <GridItem>
          <Produto />
        </GridItem>
        <GridItem>
          <Produto />
        </GridItem>
        <GridItem>
          <Produto />
        </GridItem>
        <GridItem>
          <Produto />
        </GridItem>
      </Grid>
    </main>
  )
}
