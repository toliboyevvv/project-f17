import { Container } from '@chakra-ui/react'
import Carousel from '../components/Carousel/Carousel'
import TabMenu from '../components/Menu/Menu'
import HotSale from '../components/HotSale'

const HomePage = () => {
  return (
    <Container maxW={'1300px'} px={'20px'}>
      <Carousel />
      <TabMenu />
      <HotSale/>
    </Container>
  )
}
export default HomePage
