


import { useEffect,  useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/Actions/Productaction';
import Loader from '../Components/Loader';
import Productcard from '../Layouts/Productcard';
import Metadata from '../Functions/Metadata';
import Slider from '../Components/Slider';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const searchQuery = location.state?.query;

  const dispatch = useDispatch();
  const { loading,  products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Memoize the filtered products to avoid recalculating on each render
  const filteredProducts = useMemo(() => {
    if (searchQuery) {
      return products.filter(
        product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.price.toString().includes(searchQuery)
      );
    }
    return products;
  }, [searchQuery, products]);
 
  return (
    <div className='dark:bg-black'>
      <Metadata title={"Home"} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {searchQuery ? null : <Slider />}
          <Container>
            <Row>
              <Col>
                <p className='text-center mb-16 font-bold text-[50px] hover:font-extrabold dark:text-[yellow] dark:hover:text-[#f45050] hover:scale-110  hover:text-[#e24040]   d-md-block d-lg-block d-xl-block d-xxl-block d-none  whitespace-nowrap'>
                  SHOP THE BEST PRODUCTS
                </p>
                <p className='text-center mb-16 font-extrabold text-[18px] hover:font-extrabold dark:text-[yellow] dark:hover:text-[#f45050] hover:scale-110  hover:text-[#e24040] d-md-none d-xs-block d-lg-none d-xl-none d-xxl-none   whitespace-nowrap'>
                  SHOP THE BEST PRODUCTS
                </p>
              </Col>
            </Row>
          </Container>

          <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
            {/* Render filtered products if searchQuery exists */}
            {(searchQuery ? filteredProducts : products).map((item, index) => (
              <>
              <Productcard key={index} product={item} />
              
              </>
            ))}
  
          </section>
          {searchQuery && filteredProducts.length > 0 && (
    <div className="mt-4 text-center font-bold text-[25px] text-orange-500 ">
      <Link to="/">
        <p><u>View all products</u></p>
      </Link>
    </div>
  )}
   {searchQuery && filteredProducts.length <= 0 && (
    <div className="mt-4 text-center font-bold text-[25px] text-orange-500 ">
      <Link to="/">
        <p><u>No product found go back to home </u></p>
      </Link>
    </div>
  )}
        </>
      )}
    </div>
    
  );
};

export default Home;

