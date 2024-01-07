import { deletetheData, gettheData } from '../../../services/user.service'
import AdminComponent from '../../Admin/admin.component'
import SharedComponent from '../../Shared/shared.component'
import './all.component.css'

import { useEffect ,useState} from 'react'
import { useNavigate } from "react-router-dom";
import { FaHome ,FaProjectDiagram} from "react-icons/fa";
import { MdOutlineUnarchive } from "react-icons/md";
import { AuthRoute } from '../../../services/AuthRoute'
import HomeComponent from '../../Home'

const headers = [ 'id',' Name','Location','Description', 'Options' ]

function AllProjectComp(){

  const [projectData,setprojectData] = useState([])
  const navigate = useNavigate()
  function CallThedata(){
      gettheData()
      .then((res) => {

      
      setprojectData(res.data)
      })
      .catch(()=>{
      })
    }
  useEffect(()=>{
     CallThedata()

  },[])

  function deleteItemGrid(item){
  
    deletetheData(item.id)
    .then((res) => {
      alert('delete Successfully')
      CallThedata()
    })
    .catch(() => {
     alert('Not deleted')
    })

  }

  function UpdateProjectGrid(each){
    console.log(each)
    
  }

  return(
    <AuthRoute>
    <div>
      <HomeComponent/>
      <div className='row'>
        <div className='col-2'> <AdminComponent/></div>
        <div className='col-10'>

          <div className='creat-top'>
            <button type='button' className='btn btn-primary' onClick={()=> navigate('/project-create')}>Create</button>
            <ul className='creat-links'>
              <li className='nav-item' onClick={()=> navigate('/dashbord')}><a href='#'><FaHome className='creat-icon'/><b>Home</b></a></li>
              <li className='nav-item'><a href='#'><FaProjectDiagram className='creat-icon'/><b>Project Manage</b></a></li>
              <li className='nav-item'><MdOutlineUnarchive className='creat-icon'/><b>All</b></li>
            </ul>
            </div>
            
            <div className='input-contaienr'>
            <div className='creat-top-all'>
              <div>
              <a href='#'className='all-box'>All({projectData.length})</a>
              <a href='#' className='trash-box'>Trash(35)</a>
            </div>
            <input type='text' placeholder='Search' className='serch-input'/>
            </div>  

             <div className='mt-5'>
               {<SharedComponent key='A' title={"Property Type"}  headers = {headers} body={projectData} 
               UpdatePropertyGrid={UpdateProjectGrid} deleteItemGrid={deleteItemGrid}  />}
             </div>
        </div>     
        </div>
      </div>  
    </div>
    </AuthRoute>

  )
}

export default AllProjectComp