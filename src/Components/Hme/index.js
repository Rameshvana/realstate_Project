import { MdMoreVert } from "react-icons/md";

import './index.css'

function HomeComponent(){
    return(
    <div className='navbar'>
        <h3 className='nav-text'>Smart dwellings</h3>
        <a href="ProfileSec"><MdMoreVert className="icon" /></a>
    </div>
    )
}

export default HomeComponent