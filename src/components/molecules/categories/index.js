import { React, Slider, Col } from '../../../libraries'
import CardList from '../card'

const Categories = ({ list }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  return (
    <Col className='pr-0 overflow-hidden'>
      <Slider {...settings}>
        {list && list.map(item => <CardList key={item.id} type='category' item={item} />)}
      </Slider>
    </Col>
    
  )
}

export default Categories
