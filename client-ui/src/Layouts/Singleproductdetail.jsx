import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Singleproductdetail = ({product}) => {
  return (
    <div className='mt-3 dark:bg-gray-900 dark:text-white'>
      <Container>
        <Col>
        <Row>
<div className='py-5 px-3  w-full shadow-2xl '>
<h1 className='text-center font-semibold text-[30px]'>{product&&product.title}</h1>
<div className='flex gap-2 items-center justify-center mt-3'>
<div className='h-[90px] w-[90px] overflow-hidden object-center bg-red-500 '><img className='h-full w-full' src={product&&product.image[0]}alt=''/></div>
<div className='h-[90px] w-[90px] overflow-hidden object-center bg-red-500 '><img className='h-full w-full' src={product&&product.image[1]}alt=''/></div>
<div className='h-[90px] w-[90px] overflow-hidden object-center bg-red-500 '><img className='h-full w-full' src= {product&&product.image[2]}alt=''/></div>
<div className='h-[90px] w-[90px] overflow-hidden object-center bg-red-500 '><img className='h-full w-full' src= {product&&product.image[3]}alt=''/></div>
</div>
<div className='mt-3'>
<h1 className='text-[20px] font-bold whitespace-nowrap'>Subtitle:&nbsp;{product && product.subtitle}</h1>
<h1 className='text-[20px] mt-2 font-bold'>Short descripttion<p className='text-[15px] font-light '>{product && product.description}</p></h1>
</div>

<div className=' flex mt-4 justify-between'>
<div>
<h1 className='text-[20px]  font-bold whitespace-nowrap'>Price:&nbsp;&nbsp;<span className='font-normal text-red-500'>{product && product.price}</span></h1>
<h1 className='text-[20px] font-bold whitespace-nowrap'>Brand:&nbsp;&nbsp;<span className='font-normal'>{product && product.brand}</span></h1>
<h1 className='text-[20px] font-bold whitespace-nowrap'>Rating:&nbsp;&nbsp;<span className='font-normal'>{product && product.rating}/5</span></h1>


</div>
<div>
<h1 className='text-[20px]  font-bold'>Disscount:&nbsp;&nbsp;<span className='font-normal'>{product && product.discount ||"0"}%</span></h1>
<h1 className='text-[20px]  font-bold'>Catogery:&nbsp;&nbsp;<span className='font-normal'>{product && product.category}</span></h1>
{product && product.stock ? (
                <span className="font-bold text-green-600">
                  In STOCK &nbsp;&nbsp;&nbsp;
                  {product.stock ? (
                    product.stock === 1 ? (
                      <span className="font-bold text-red-600">
                        Only {product.stock} item left
                      </span>
                    ) : product.stock < 30 ? (
                      <span className="font-bold text-purple-600">
                        {product.stock} items left
                      </span>
                    ) : (
                      <span className="font-bold text-orange-500">
                        {product.stock} items left
                      </span>
                    )
                  ) : null}
                </span>
              ) : (
                <span className="font-bold text-red-600">OUT OF STOCK</span>
              )}
</div>
</div>

</div>

        </Row>
        </Col>
      </Container>
    </div>
  )
}

export default Singleproductdetail
