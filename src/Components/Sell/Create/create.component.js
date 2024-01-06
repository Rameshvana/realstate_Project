import './create.component.css'
import HomeComponent from '../../Hme/index'
import AdminComponent from '../../Admin/admin.component'

function CreateSellComp(){
   return(
    <div>
      <HomeComponent/>
      <div className='row'>
        <div className='col-2'><AdminComponent/></div>
        <div className='col-10'>
           <h5>Sell create Component</h5>  
        </div>
      </div>   
    </div>
   ) 
}

export default CreateSellComp;