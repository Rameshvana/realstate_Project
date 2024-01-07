import { MdMoreVert } from "react-icons/md";
import { FontAwesomeIcon } from 'react-icons/fa'
import { VscDebug } from "react-icons/vsc";
import { useState } from "react";



import './index.css'
import { useNavigate } from "react-router-dom";

function HomeComponent() {
    const [login,setlogin] = useState(false)
    let navigate = useNavigate()
    let showButton = login ? 'sinout-card' : 'aa';

    function getLagout(){
        
        localStorage.clear('User')
        navigate('/dashbord')

    }
    return (
        <div className="home-container">
            <div className='navbar'>
                <h3 className='nav-text'>Smart dwellings</h3>
                <a href="#"><MdMoreVert className="icon" onClick={()=> setlogin(!login)}/></a>
            </div>
            <div className={showButton}>
               <a href=""><li className="lk" onClick={getLagout}><span className="home-span">Sign Out</span></li></a>
            </div>
        </div>

    )
}

export default HomeComponent