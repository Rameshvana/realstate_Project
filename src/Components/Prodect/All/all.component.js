import { useEffect, useState } from 'react'
import { deleteprodectData, getprodectData } from '../../../services/user.service'
import AdminComponent from '../../Admin/admin.component'
import HomeComponent from '../../Hme'
import SharedComponent from '../../Shared/shared.component'
import { FaHome ,FaProjectDiagram} from "react-icons/fa";
import { MdOutlineUnarchive } from "react-icons/md";

import { useNavigate } from 'react-router-dom'
import { AuthRoute } from '../../../services/AuthRoute'

const headers = [ 'id',' Name','Size','Price', 'Total','Parking','Utilitu','Deduction','Refund','Price','options' ]


function AllProductComp(){
    const [am,setam] = useState([])
    let navigate = useNavigate()

    function CallThedata(){
        getprodectData()
        .then((res) => {
         setam(res.data)
        console.log(res.data)
        })
        .catch(()=>{
        })
      }
    useEffect(()=>{
       CallThedata()
  
    },[])

    function deleteItemGrid(item){
      deleteprodectData(item.id)
      .then(()=>{
        alert('delete product data success')
        CallThedata()
      })
      .catch(()=>{
        alert('delete product data failed')
      })

    }
    function UpdatePropertyGrid(){

    }



   return(
    <AuthRoute>

    <div>
      <HomeComponent/>
      <div className='row'>
        <div className='col-2'><AdminComponent/></div>
        <div className='col-10'>
        <div className='creat-top'>
            <button type='button' className='btn btn-primary' onClick={()=> navigate('/prodect-create')}>Create</button>
            <ul className='creat-links'>
              <li className='nav-item'><a href='#'><FaHome className='creat-icon'/><b>Home</b></a></li>
              <li className='nav-item'><a href='#'><FaProjectDiagram className='creat-icon'/><b>Project Manage</b></a></li>
              <li className='nav-item'><MdOutlineUnarchive className='creat-icon'/><b>All</b></li>
            </ul>
            </div> 

            <div className='input-contaienr'>
            <div className='creat-top-all'>
              <div>
              <a href='#'className='all-box'>All({am.length})</a>
              <a href='#' className='trash-box'>Trash(35)</a>
            </div>
            <input type='text' placeholder='Search' className='serch-input'/>
            </div>   
          
          
          <div>
          {<SharedComponent key='A' title={"Property Type"}  headers = {headers} body={am} 
               UpdatePropertyGrid={UpdatePropertyGrid} deleteItemGrid={deleteItemGrid}  />}
          </div> 
          </div>

        </div>
      </div>  
    </div>
    </AuthRoute>

   ) 
}

export default AllProductComp