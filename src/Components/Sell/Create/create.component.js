import './create.component.css'
import { useNavigate } from 'react-router-dom';
import { FaHome, FaDolly } from "react-icons/fa";
import { MdOutlineUnarchive } from "react-icons/md";
import AdminComponent from '../../Admin/admin.component'
import { gettheData, savesellData } from '../../../services/user.service';
import { useEffect,useState } from 'react';
import HomeComponent from '../../Home';

let customernames = ['Venu','Anil','Raghav','varalaxmi']
let flonum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function CreateSellComp() {
  let navigate = useNavigate();
  const [con,setcon] = useState([])
  function saveSellsData(event){
    event.preventDefault();
    let data = {
      customername:document.getElementById('customername').value,
      projectname:document.getElementById('projectname').value,
      productid:document.getElementById('productid').value,
      employename:document.getElementById('employename').value,
      date:document.getElementById('date').value
    }
    //{customername,projectname,productid,employename,date}
    console.log(data)
    savesellData(data)
    .then(function(){
      alert('Sell data saved successfully...')
    })
    .catch(function(){
      alert('Sell data not Save ')
    })
  }

  useEffect(function () {
    gettheData()
      .then(function (res) {
        setcon(res.data)
      })
      .catch(function () {
        alert('Not get data')
      })
  }, [])

  return (
    <div>
      <HomeComponent/>
      <div className='row'>
        <div className='col-2'><AdminComponent /></div>
        <div className='col-10'>
  
          <form onSubmit={saveSellsData}>
            <div className='creat-top'>
              <button type='button' className='btn btn-primary' onClick={() => navigate('/dashbord')}>Back</button>
              <ul className='creat-links hn'>
                <li className='nav-item' ><a href='#'><FaHome className='creat-icon' /><b>Home</b></a></li>
                <li className='nav-item' onClick={()=> navigate('/sell-all')}><a href=''><FaDolly className='creat-icon' /><b>Sell Manage</b></a></li>
                <li className='nav-item'><MdOutlineUnarchive className='creat-icon' /><b>Create</b></li>
              </ul>
              <div>
              </div>
            </div>
            <div className='input-contaienr'>
              <h4>Create Project Manage</h4>
              <p>Put Project Manage Information</p>
              <div className='input-card'>
                <div className='drop-down-card'>
                  <select className='form-control-plaintext prodect-input' id='customername' required>
                    <option>Select Customer Name</option>
                    {customernames.map((a) => (
                      <option value={a.name}>{a}</option>
                    ))}

                  </select>
                  <select className='form-control-plaintext prodect-input' id='projectname' required>
                    <option>Select Project Name</option>
                    {con.map((f) => (<option value={f}>{f.name}</option>))}
                  </select>
                  <select className='form-control-plaintext prodect-input' id='productid' required>
                    <option>Select Product Id</option>
                    {flonum.map((n) => (<option value={n}>{n}th</option>))}
                  </select>
                  <select className='form-control-plaintext prodect-input' id='employename' required>
                    <option>Select Employe Name</option>
                    {customernames.map((n) => (<option value={n}>{n}th</option>))}
                  </select>
                  <input type='date' id='date' placeholder='Sells Date' class="form-control-plaintext prodect-input" required />

                </div>
               
              </div>
              <button type='submit' className='btn btn-primary ml-3'>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateSellComp;