import './dashbord.component.css'
import { FaProjectDiagram, FaFileInvoiceDollar, FaUser, FaUserLock, FaReceipt } from 'react-icons/fa'
import { AiFillBank } from "react-icons/ai";
import imag1 from '../../assets/imeges/Capture.PNG'
import image2 from '../../assets/imeges/Capture1.PNG'
import HomeComponent from '../Home/index.js'
import MainComponent from '../MainComponent/main.component.js';
import AdminComponent from '../Admin/admin.component.js';
import { AuthRoute } from '../../services/AuthRoute.js'


function DashbordComponent() {
  return (
    <AuthRoute>
    <div className='one'>
      <HomeComponent/>
      <div className='row'>
        <div className='col-2'>
          <AdminComponent/>
        </div>
        <div className='col-10'>
          <div className='dashbord-container'>
            <h5 className='top-text '>Dashbord</h5>
            <div className='row'>
              <div className='col-3'>
                <div className='Pdash-card ca'>
                  <div className='Pdash-icon-card'><FaProjectDiagram className='dash-icon' /></div>
                  <div className='text-card'>
                    <h4 className='project-text'>Project</h4>
                    <span className='dash-span'>42</span>
                  </div>
                </div>

              </div>
              <div className='col-3'>
                <div className='ca Ldash-card'>
                  <div className='Ldash-icon-card'><FaFileInvoiceDollar className='dash-icon' /></div>
                  <div className='text-card'>
                    <h4 className='project-text'>Ledger</h4>
                    <span className='dash-span'>22</span>
                  </div>
                </div>

              </div>
              <div className='col-3'>
                <div className='Ledash-card'>
                  <div className='Ledash-icon-card'><FaFileInvoiceDollar className='dash-icon' /></div>
                  <div className='text-card'>
                    <h4 className='project-text'>Ledger Group</h4>
                    <span className='dash-span'>48</span>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className=' ca Leddash-card'>
                  <div className='Leddash-icon-card'><FaFileInvoiceDollar className='dash-icon' /></div>
                  <div className='text-card'>
                    <h4 className='project-text'>Lesgar</h4>
                    <span className='dash-span'>60</span>
                  </div>
                </div>

              </div>
              <div className='col-3'>
                <div className='ca Bdash-card'>
                  <div className='Bdash-icon-card'><AiFillBank className='dash-icon' /></div>
                  <div className='text-card'>
                    <h4 className='project-text'>Bank Or Cash</h4>
                    <span className='dash-span'>70</span>
                  </div>
                </div>

              </div>
              <div className='col-3'>
                <div className='ca Udash-card'>
                  <div className='Udash-icon-card'><FaUser className='dash-icon' /></div>
                  <div className='text-card'>
                    <h4 className='project-text'>User</h4>
                    <span className='dash-span'>7</span>
                  </div>
                </div>

              </div>
              <div className='col-3'>
                <div className='ca Rdash-card'>
                  <div className='Rdash-icon-card'><FaUserLock className='dash-icon' /></div>
                  <div className='text-card'>
                    <h4 className='project-text'>Role Manage</h4>
                    <span className='dash-span'>7</span>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className='ca Redash-card'>
                  <div className='Redash-icon-card'><FaReceipt className='dash-icon' /></div>
                  <div className='text-card'>
                    <h4 className='project-text'>Report</h4>
                    <span className='dash-span'>14</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='quick'>
              <h5 className='mb-3'>Quick Access</h5>
              <div className='boxes'>
                <div href='#' className='box'><h6 className='am'>Project</h6></div>
                <div href='#' className='box b1'><h6 className='am'>Product</h6></div>
                <div href='#' className='box b2'><h6 className='am'>Sell</h6></div>
                <div href='#' className='box b3'><h6 className='am'>Purchase</h6></div>
                <div href='#' className='box b4'><h6 className='am'>Purchase Order</h6></div>
                <div href='#' className='box b1'><h6 className='am'>Vender</h6></div>
                <div href='#' className='box b2'><h6 className='am'>Employee</h6></div>
                <div href='#' className='box b3'><h6 className='am'>Customer</h6></div>
                <div href='#' className='box b8'><h6 className='am'>Ledger</h6></div>
                <div href='#' className='box b1'><h6 className='am'>Trial Balance</h6></div>
                <div href='#' className='box b5'><h6 className='am'>Cost Of Revinue</h6></div>
                <div href='#' className='box b6'><h6 className='am'>Profit or Loss Account</h6></div>
                <div href='#' className='box b7'><h6 className='am'>Retained Earnings</h6></div>
                <div href='#' className='box b9'><h6 className='am'>Fixed Asset Shedule</h6></div>
                <div href='#' className='box b7'><h6 className='am'>Balance Sheet</h6></div>
                <div href='#' className='box b10'><h6 className='am'>Cash Flow</h6></div>
                <div href='#' className='box b8'><h6 className='am'>Recieve Payment</h6></div>
                <div href='#' className='box b9'><h6 className='am'>Legder Type</h6></div>
                <div href='#' className='box b5'><h6 className='am'>Ledger Group</h6></div>
                <div href='#' className='box b12'><h6 className='am'>Debit Voucher</h6></div>
                <div href='#' className='box b11'><h6 className='am'>Credit Voucher</h6></div>
                <div href='#' className='box b13'><h6 className='am'>Journal Voucher</h6></div>
                <div href='#' className='box b5'><h6 className='am'>Contra Voucher</h6></div>

              </div>
            </div>
            <div className='images-card'>
              <img src={imag1} className='dash-img' />
              <img src={image2} className='dash-img' />

            </div>

          </div>
        </div>
      </div>
    </div>




    </AuthRoute>
  )
}

export default DashbordComponent