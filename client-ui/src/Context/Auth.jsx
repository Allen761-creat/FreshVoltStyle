import { useContext,createContext,useEffect,useState } from 'react'
const AuthContext = createContext()
import axios from 'axios';
import apis from '../Config/Apis';

const Authprovider =({children})=>{
    const [auth, setauth] = useState({
      user: null,
      token:'',
      refreshtoken:'',
      
      
    });
    // console.log(setauth)

    useEffect(()=>{
        const FROMLS =localStorage.getItem('auth')
        FROMLS && setauth(JSON.parse(FROMLS))
    },[])

    axios.defaults.baseURL = apis[0]
    axios.defaults.headers.common['Authorization'] =auth?.token ;
    axios.defaults.headers.common['refresh_token'] =auth?.refreshtoken ;
   
    return(
        <AuthContext.Provider value={[auth,setauth]}>
            {children}
        </AuthContext.Provider>
    )
   
}

 const useAuth = () => useContext(AuthContext)

export {
    Authprovider,
    useAuth
} ;