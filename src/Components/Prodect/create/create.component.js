import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaHome ,FaProjectDiagram} from "react-icons/fa";
import { MdOutlineUnarchive } from "react-icons/md";

import AdminComponent from '../../Admin/admin.component'
import HomeComponent from '../../Hme'

import './creat.component.css'
import { gettheData, saveprodectData } from '../../../services/user.service'
import { AuthRoute } from '../../../services/AuthRoute';

let flattype = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I']
let flonum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function CreateProdectComp() {
  //const [activeproject,setactiveproject] = useState([])
  const [con, setcon] = useState([])
  let navigate = useNavigate()

  useEffect(function () {
    gettheData()
      .then(function (res) {
        setcon(res.data)
      })
      .catch(function () {
        alert('Not get data')
      })
  }, [])

  function saveprodectDataRegi(event){
    event.preventDefault()
    console.log('Wor')
    let data = {
      id:0,
      projectName: document.getElementById('projectname').value,
      flattype: document.getElementById('flattype').value,
      flatnumber: document.getElementById('flatnumber').value,
      flatsize: document.getElementById('flatsize').value,
      unitprice: document.getElementById('unitprice').value,
      parkingcharge: document.getElementById('parkingcharge').value,
      utiltycharge: document.getElementById('utiltycharge').value,
      discount: document.getElementById('discount').value,
      Description: document.getElementById('totalprice').value,
    }
    console.log(data)
    saveprodectData(data)
    .then(function(res){
      alert('prodect data saved Successfully.')
    })
    .catch(function(){
      alert('not save prodect data')
    })
  }




  return (
    <AuthRoute>

    <div>
      <HomeComponent />
      <div className='row'>
        <div className='col-2'><AdminComponent /></div>
        <div className='col-10'>
          <form onSubmit={saveprodectDataRegi}>

            <div className='creat-top'>
              <button type='button' className='btn btn-primary' onClick={() => navigate('/dashbord')}>Back</button>
              <ul className='creat-links'>
                <li className='nav-item'><a href='#'><FaHome className='creat-icon' /><b>Home</b></a></li>
                <li className='nav-item'><a href='#'><FaProjectDiagram className='creat-icon' /><b>Project Manage</b></a></li>
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
                <select className='form-control-plaintext prodect-input' id='projectname' required>
                  <option>Project Name*</option>
                  {con.map((a) => (
                    <option value={a.name}>{a.name}</option>
                  ))}

                </select>
                <select className='form-control-plaintext prodect-input' id='flattype' required>
                  <option>Flat Type*</option>
                  {flattype.map((f) => (<option value={f}>{f}</option>))}
                </select>
                <select className='form-control-plaintext prodect-input' id='flatnumber' required>
                  <option>Floor Number*</option>
                  {flonum.map((n) => (<option value={n}>{n}th</option>))}
                </select>

                <input type='number' id='flatsize' placeholder='Flat Size*' class="form-control-plaintext prodect-input"  required/>
                <input type='number' id='unitprice' placeholder='Unit Price*' class="form-control-plaintext prodect-input"  required/>
                <input type='number' id='totalprice' placeholder='Total Flat price*' class="form-control-plaintext prodect-input"  />

                <input type='number' id='parkingcharge' placeholder='Car Parking Charge' class="form-control-plaintext prodect-input"  />
                <input type='number' placeholder='Utility Charge' id='utiltycharge' class="form-control-plaintext prodect-input"  />
                <input type='number' id='workchagge' placeholder='Additional Work Charge' class="form-control-plaintext prodect-input"  />

                <input type='number' id='othercharge' placeholder='Other Charge' class="form-control-plaintext prodect-input"  />
                <input type='number' id='discount' placeholder='Discount Or Deduction*' class="form-control-plaintext prodect-input"  />
                <input type='number' id='refundcharge' placeholder='Refund Additional Work Charge' class="form-control-plaintext prodect-input"  />
                <input type='number' id='sellsprice' placeholder='Net Sells Price' class="form-control-plaintext prodect-input"  />
              </div>
            </div>
            <input type='file' placeholder='No file Chosen' />
            <textarea id='description' cols='150' rows='1' placeholder='Description*' className='form-control-plaintext m' ></textarea>
            <button type='submit' className='btn btn-primary'>Save</button>


          </div>
          </form>

  
        </div>
      </div>
    </div>
    </AuthRoute>

  )
}

export default CreateProdectComp