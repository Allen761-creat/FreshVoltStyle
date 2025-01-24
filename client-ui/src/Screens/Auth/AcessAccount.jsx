import { useState,useEffect } from "react"
import axios from "axios"
import { errorToast, successToast,warningToast } from "../../Functions/Message"
import { useNavigate,useParams } from "react-router-dom"
import Loader from "../../Components/Loader"
import apis from "../../Config/Apis"

// -------------------------------forget passwords ----------------

const AcessAccount = () => {
    const [loader, setloader] = useState(false)
  
     const navigate = useNavigate()
    

     const {token} = useParams()
    
     useEffect(()=>{
        token &&  activateaccount()
    
    },[token])
    const activateaccount = async ()=>{
try {
    setloader(true)
    const {data} = await axios.post(`${apis[0]}/acessaccount`,{token})
     if(data?.error) {
        setloader(false)
        errorToast(data.error)
     }
     else{
         setloader(false)
         console.log(data.token);
         navigate('/Resetpassword', {  
            state: { token: data.token }, // Pass the token through state  
                 
        });    
         successToast("Set your password")
     }

} catch (error) {
    setloader(false)
    console.log(error)
    warningToast("Failed to activate account " + error.message)
    
}
    }

   



  return (
    <div>
      
    {
        loader && <Loader/>
    }

    </div>
  )
}

export default AcessAccount
