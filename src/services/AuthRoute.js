//import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export function AuthRoute(props){
    let value = false
    //let navigate = useNavigate()
     value = localStorage.getItem('User')
     console.log(value)

     if ( value ){
        return props.children;
    } else {
       //navigate('/Login')
       return <Navigate to='/Login'></Navigate>

    }
}