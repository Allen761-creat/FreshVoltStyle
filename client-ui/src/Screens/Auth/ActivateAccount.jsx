import { useState,useEffect } from "react"
import axios from "axios"
import { errorToast, successToast,warningToast } from "../../Functions/Message"
import { useNavigate,useParams } from "react-router-dom"
import Loader from "../../Components/Loader"
import apis from "../../Config/Apis"
import { useAuth } from "../../Context/Auth"

// ----------------------------------------SIGN IN --------------------------------
const ActivateAccount = () => {
    const [loader, setloader] = useState(false)
     const navigate = useNavigate()
     const [auth ,setauth] = useAuth()

     const {token} = useParams()
     console.log(token)
     useEffect(()=>{
        token &&  activateaccount()
    
    },[token])
    const activateaccount =async ()=>{
try {
    setloader(true)
    const {data} = await axios.post(`${apis[0]}/signup`,{token})
     if(data?.error) {
        
        setloader(false)
        errorToast(data.error)
     console.log(data.error)

     }
     else{
        
        setauth(data)      
        localStorage.setItem('auth', JSON.stringify(data))
        setloader(false)
         successToast("Account activated successfully")
         navigate("/dashboard/profileform")
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

export default ActivateAccount
