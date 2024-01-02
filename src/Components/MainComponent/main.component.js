import { MdOutlineClearAll, MdDashboard,MdAccountBalanceWallet } from "react-icons/md";
import { FaProjectDiagram ,FaDolly,FaShoppingCart,FaUserGraduate,FaIndustry,FaUserTie,FaFileInvoiceDollar,FaLanguage,FaUser,FaUserLock} from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaBoxesStacked ,FaReceipt} from "react-icons/fa6";
import { AiFillBank } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { TiMinus } from "react-icons/ti";
import { useState } from "react";











import './main.component.css';
import DashbordComponent from "../Dashbord/dashbord.component";


function MainComponent() {

  const [activeProduct,setactiveProduct] = useState(false)
  

  const getProduct = () => {
    
  }

   let show = activeProduct ? 'a' : 'sub-menu' ;
   let Picon = activeProduct ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />;


  return (
    <div>
      <div className='navbar'>
        <h3 className='nav-text'>Smart dwellings</h3>
        <a href="#"><MdOutlineClearAll className="icon" /></a>
      </div>
      <div className="row">
        <div className="col-2">
          <ul className="nav-links">
            <a href='#HomeSection'> <li className='nav-linkD'><MdDashboard className='nav-icon' /><span>Dashbord</span></li></a>
            <div className="Project">
              <a href='#HomeSection'> <li className='nav-link'>
                <div><FaProjectDiagram className='nav-icon' /><span>Project</span></div>
                <GoPlus className="plus-icon" />
                </li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Product">
              <a onClick={()=> setactiveProduct(!activeProduct)}> <li className='nav-link'><div><FaBoxesStacked className='nav-icon' /><span>Product</span></div>{Picon}</li></a>
              <ul className={show}>
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Sell">
              <a href='#HomeSection'> <li className='nav-link'><div><FaDolly className='nav-icon' /><span>Sell</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Purchese ">
              <a href='#HomeSection'> <li className='nav-link'><div><FaShoppingCart className='nav-icon' /><span>Purchese</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">Requistion</li></a>
                <a href="#"><li className="sub-item">RqN Confirmed</li></a>
                <a href="#"><li className="sub-item">Order</li></a>
              </ul>
            </div>
            <div className="Vendor"> 
              <a href='#HomeSection'> <li className='nav-link'><div><FaIndustry className='nav-icon' /><span>Vendor</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Employee">
              <a href='#HomeSection'> <li className='nav-link'><div><FaUserGraduate className='nav-icon' /><span>Employee</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Customer ">
              <a href='#HomeSection'> <li className='nav-link'><div><FaUserTie className='nav-icon' /><span>Customer</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Ledger ">
              <a href='#HomeSection'> <li className='nav-link'><div><FaFileInvoiceDollar className='nav-icon' /><span>Ledger</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">Type</li></a>
                <a href="#"><li className="sub-item">Group</li></a>
                <a href="#"><li className="sub-item">Name</li></a>
              </ul>
            </div>
            <div className="Bank cash ">
              <a href='#HomeSection'> <li className='nav-link'><div><AiFillBank className='nav-icon' /><span>Bank cash</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Voucher ">
              <a href='#HomeSection'> <li className='nav-link'><div><MdAccountBalanceWallet className='nav-icon' /><span>Voucher</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">Credit</li></a>
                <a href="#"><li className="sub-item">Debit</li></a>
                <a href="#"><li className="sub-item">Journal</li></a>
                <a href="#"><li className="sub-item">Contra</li></a>
              </ul>
            </div>
            <div className="Report ">
              <a href='#HomeSection'> <li className='nav-link'><div><FaReceipt className='nav-icon' /><span>Report</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">Accounts</li></a>
                <a href="#"><li className="sub-item">Purchase</li></a>
                <a href="#"><li className="sub-item">General</li></a>
              </ul>
            </div>
            <div className="Language ">
              <a href='#HomeSection'> <li className='nav-link'><div><FaLanguage className='nav-icon' /><span>Language</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="User ">
              <a href='#HomeSection'> <li className='nav-link'><div><FaUser  className='nav-icon' /><span>User</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">All</li></a>
              </ul>
            </div>
            <div className="Role Mange">
              <a href='#HomeSection'> <li className='nav-link'><div><FaUserLock className='nav-icon' /><span>Role Manage</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">All</li></a>
              </ul>
            </div>
            <div className="Settings">
              <a href='#HomeSection'> <li className='nav-link'><div><CiSettings className='nav-icon' /><span>Settings</span></div><GoPlus className="plus-icon" /></li></a>
              <ul className="sub-menu">
                <a href="#"><li className="sub-item">General</li></a>
                <a href="#"><li className="sub-item">System</li></a>
              </ul>
            </div>
          </ul>
        </div>
        <div className="col-10">
          <div id='dashbord'>
            <DashbordComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainComponent