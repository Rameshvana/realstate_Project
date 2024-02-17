 import './create.component.css'
import AdminComponent from '../../Admin/admin.component'
import { FaHome ,FaProjectDiagram} from "react-icons/fa";
import { MdOutlineUnarchive } from "react-icons/md";
import { gettheData, savetheData } from '../../../services/user.service';
import { useNavigate } from "react-router-dom";
import { AuthRoute } from '../../../services/AuthRoute';
import HomeComponent from '../../Home';


 function CreateProjectComp(){
  const navigate = useNavigate()

   function saveData(event){
    event.preventDefault();
    let data = {
      id: 0,
      name: document.getElementById('name').value,
      location: document.getElementById('location').value,
      description: document.getElementById('description').value
    }
  
    savetheData(data)
    .then((res) => {
         alert('Succesfully save the project data')
         name: document.getElementById('name').value = ''
         location: document.getElementById('location').value =''
         description: document.getElementById('description').value=''
    })
    .catch(() => {
         alert('Data Save failed')
    })
    
   }

    return(
      <AuthRoute>
       <div>
         <HomeComponent/>
         <div className='row'>
           <div className='col-2'> <AdminComponent/></div>
           <div className='col-10'>
              
              <form onSubmit={saveData}>

                <div className='creat-top'>
                  <button type='button' className='btn btn-primary' onClick={()=> navigate('/dashbord')}>Back</button>
                  <ul className='creat-links'>
                    <li className='nav-item' ><a href='#'><FaHome className='creat-icon'/><b>Home</b></a></li>
                    <li className='nav-item' onClick={()=> navigate('/project-all')}><a href=''><FaProjectDiagram className='creat-icon'/><b>Project Manage</b></a></li>
                    <li className='nav-item'><MdOutlineUnarchive className='creat-icon'/><b>Create</b></li>
                  </ul>
                </div>
                
                <div className='input-contaienr'>
                <h4>Create Project Manage</h4>
                <p>Put Project Manage Information</p>
                <div className='input-card'>
                  <input type='text' id = 'name' placeholder='Name*' name='name'  class="form-control-plaintext input" required/> 
                  <input type='text' id = 'location' placeholder='Location' class="form-control-plaintext input-location" required/>
                </div>
                <textarea id='description'cols='150' rows='1' placeholder='Description' className='form-control-plaintext mt-4 input' required></textarea>
                <button type='submit' className='btn btn-primary mt-4'>Save</button>
                </div>
              </form>
            </div> 
         </div>
       </div> 
       </AuthRoute>

    )
 }

 export default CreateProjectComp
