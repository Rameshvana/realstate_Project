import { useNavigate } from 'react-router-dom';
import AdminComponent from '../../Admin/admin.component'
import { FaHome ,FaDolly} from "react-icons/fa";
import { FaBoxesStacked ,FaReceipt} from "react-icons/fa6";
import { MdOutlineUnarchive } from "react-icons/md";
import SharedComponent from '../../Shared/shared.component'

import './all.component.css'
import HomeComponent from '../../Home';
import { useEffect, useState } from 'react';
import { deleteSellData, getsellData } from '../../../services/user.service';
let headers = ['Customer Name','Project Name','Product ID','Sellar Name','Sellar Date','Options']
let customernames = ['Move to trash','Perminently delete']


function AllSellComp(){
   let navigate = useNavigate()
   let [sell,setsell] = useState([])

   function CallThedata(){
    getsellData()
    .then((res) => {
    setsell(res.data)
    })
    .catch(()=>{
      alert('Get Sell Data failed')
    })
  }
  useEffect(()=>{
    CallThedata()
  },[])


   function UpdatePropertyGrid(){}

   function deleteItemGrid(each){
    console.log(each)
    deleteSellData(each.id)
    .then((res) => {
      alert('Delete Sell data Success..')
      CallThedata();
    })
    .catch(()=>{
      alert('Delete Sell data Failed..')
    })
   }

   return(
    <div>
       <HomeComponent/>
       <div className='row'>
          <div className='col-2'><AdminComponent/></div>
          <div className='col-10'>
            
            <div className='creat-top'>
            <button type='button' className='btn btn-primary' onClick={()=> navigate('/sell-create')}>Create</button>
            <ul className='creat-links'>
              <li className='nav-item' onClick={()=> navigate('/dashbord')}><a href='#'><FaHome className='creat-icon'/><b>Home</b></a></li>
              <li className='nav-item'><a href='#'><FaDolly className='creat-icon'/><b>Sell Manage</b></a></li>
              <li className='nav-item'><MdOutlineUnarchive className='creat-icon'/><b>All</b></li>
            </ul>
            </div>
      

            <div className='input-contaienr'>
            <div className='creat-top-all'>
              <div>
              <a href='#'className='all-box'>All({sell.length})</a>
              <a href='#' className='trash-box'>Trash(35)</a>
            </div>
            <input type='text' placeholder='Search' className='serch-input'/>
            </div>   
            <div className='filter-card'>
            <select className='form-control-plaintext prodect-input am' id='projectname' required>
                    <option>Select section</option>
                    {customernames.map((f) => (<option value={f}>{f.name}</option>))}
              </select>
              <div>
              <button type='button' className='btn btn-primary but'>Apply</button>
              </div>
             
            </div>
          
          <div>
          {<SharedComponent key='A' title={"Property Type"}  headers = {headers} body={sell} 
               UpdatePropertyGrid={UpdatePropertyGrid} deleteItemGrid={deleteItemGrid}  />}
          </div> 
          </div>
          </div>
        </div> 
    </div>
   ) 
}

export default AllSellComp