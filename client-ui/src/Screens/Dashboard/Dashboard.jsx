
import Sidebar from './Sidebar'
import { Outlet,  } from 'react-router-dom'
import Metadata from '../../Functions/Metadata'
import { Col, Container, Row } from 'react-bootstrap'
import P404 from '../../Screens/P404'
const Dashboard = () => {
  return (

<>
<div className='dark:bg-black d-lg-block d-xl-block d-xxl-block d-md-none d-none flex '>
<Container className='p-0 m-0' >
    <Row className='p-0 m-0'>
    <Metadata title='Dashboard'/>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className=' p-0  m-0'>
        <div className='text-white'>
            <Sidebar/>
        </div>
        </Col>
        <Col>
        <Outlet />
        </Col>
    </Row>
</Container>
</div>
<div className='d-lg-none d-xl-none d-xxl-none d-md-block d-block'>
  <P404/>
</div>

</>
  )
}

export default Dashboard


