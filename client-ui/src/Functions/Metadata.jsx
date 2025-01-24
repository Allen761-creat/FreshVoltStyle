import React from 'react'
import  {Helmet} from 'react-helmet';
const Metadata = ({title}) => {
  return (
    <div>
        <Helmet>
            <title>
                {title} -FreshVoltStyle
            </title>
        </Helmet>
      
    </div>
  )
}

export default Metadata
