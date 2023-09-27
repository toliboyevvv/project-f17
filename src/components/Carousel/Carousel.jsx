// Import Swiper styles
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'
import { items } from './CarouselItem'
const Carousel = () => {
  return <AliceCarousel items={items} infinite mouseTracking />
}

export default Carousel
