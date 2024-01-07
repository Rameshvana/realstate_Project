import { MdOutlineClearAll, MdDashboard,MdAccountBalanceWallet } from "react-icons/md";
import { FaProjectDiagram ,FaDolly,FaShoppingCart,FaUserGraduate,FaIndustry,FaUserTie,FaFileInvoiceDollar,FaLanguage,FaUser,FaUserLock} from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaBoxesStacked ,FaReceipt} from "react-icons/fa6";
import { AiFillBank } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { TiMinus } from "react-icons/ti";
import { useState } from "react";

import './admin.component.css'
import DashbordComponent from "../Dashbord/dashbord.component";
import HomeComponent from "../Home";

function AdminComponent() {
  const [activeProduct,setactiveProduct] = useState(false)
  const [activeproject,setactiveproject] = useState(false)
  const [activesell,setactivesell] = useState(false)
  const [activepurchase,setactivepurchase] = useState(false)
  const [activevendor,setactivevendor] = useState(false)
  const [activeemploye,setactiveemploye] = useState(false)
  const [activecustomer,setactivecustomer] = useState(false)
  const [activeledger,setactiveledger] = useState(false)
  const [activecash,setactivecash] = useState(false)
  const [activevocher,setactivevocher] = useState(false)
  const [activereport,setactivereport] = useState(false)
  const [activelanguage,setactivelanguage] = useState(false)
  const [activeuser,setactiveuser] = useState(false)
  const [activemanager,setactivemanager] = useState(false)
  const [activesettings,setactivesettings] = useState(false)
  

   let show = activeProduct ? 'a' : 'sub-menu' ;
   let Picon = activeProduct ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />
   ///let  onClick={()=> setactiveProduct(!activeProduct)}


  return (
           <div>
          <ul className="nav-links">
            <a href='/Dashbord'> <li className='nav-linkD'><MdDashboard className='nav-icon' /><span>Dashbord</span></li></a>
            <div className="Project">
              <a href='#'> <li className='nav-link' onClick={() => setactiveproject(!activeproject)}>
                <div><FaProjectDiagram className='nav-icon' /><span>Project</span></div>
                {activeproject ? <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon"/>}
                </li></a>
              <ul className={activeproject ? 'a' : 'sub-menu'}>
                <a href="/project-all"><li className="sub-item">All</li></a>
                <a href="/project-create"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Product">
              <a href="#"> <li className='nav-link' onClick={()=> setactiveProduct(!activeProduct)}><div><FaBoxesStacked className='nav-icon' /><span>Product</span></div>
              { activeProduct ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />}
              </li></a>
              <ul className={activeProduct ? 'a' : 'sub-menu' }>
                <a href="/prodect-all"><li className="sub-item">All</li></a>
                <a href="/prodect-create"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Sell">
              <a href='#HomeSection'> <li className='nav-link' onClick={()=> setactivesell(!activesell)}>
                <div><FaDolly className='nav-icon' /><span>Sell</span></div>
              {activesell ? <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon"/>}
              </li></a>
              <ul className={activesell ? 'a' : 'sub-menu'}>
                <a href="/sell-all"><li className="sub-item">All</li></a>
                <a href="/sell-create"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Purchese ">
              <a href='#HomeSection'> <li className='nav-link' onClick={()=> setactivepurchase(!activepurchase)}>
                <div><FaShoppingCart className='nav-icon' /><span>Purchese</span></div>
                {activepurchase ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon"/>}
                </li></a>
              <ul className={activepurchase ? 'a' : 'sub-menu' }>
                <a href="#"><li className="sub-item">Requistion</li></a>
                <a href="#"><li className="sub-item">RqN Confirmed</li></a>
                <a href="#"><li className="sub-item">Order</li></a>
              </ul>
            </div>
            <div className="Vendor"> 
              <a href='#HomeSection'> <li className='nav-link' onClick={()=> setactivevendor(!activevendor)}>
                <div><FaIndustry className='nav-icon' /><span>Vendor</span></div>
                {activevendor ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon"/>}
                </li></a>
              <ul className={activevendor ? "a" : 'sub-menu'}>
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Employee">
              <a href='#HomeSection'> <li className='nav-link' onClick={()=> setactiveemploye(!activeemploye)}>
                <div><FaUserGraduate className='nav-icon' /><span>Employee</span></div>
                {activeemploye ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon"/>}                </li></a>
              <ul className={activeemploye ? "a" : 'sub-menu'}>
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Customer ">
              <a href='#HomeSection'> <li className='nav-link'  onClick={()=> setactivecustomer(!activecustomer)}><div><FaUserTie className='nav-icon' /><span>Customer</span></div>
              {activecustomer ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />}
                </li></a>
              <ul className={ activecustomer ? 'a' : 'sub-menu' }>
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Ledger ">
              <a href='#HomeSection'> <li className='nav-link' onClick={()=> setactiveledger(!activeledger)}><div><FaFileInvoiceDollar className='nav-icon' /><span>Ledger</span></div>
              {activeledger ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />}
              </li></a>
              <ul className={activeledger ? 'a' : 'sub-menu' }>
                <a href="#"><li className="sub-item">Type</li></a>
                <a href="#"><li className="sub-item">Group</li></a>
                <a href="#"><li className="sub-item">Name</li></a>
              </ul>
            </div>
            <div className="Bank cash ">
              <a href='#HomeSection'> <li className='nav-link' onClick={()=> setactivecash(!activecash)}><div><AiFillBank className='nav-icon' /><span>Bank cash</span></div>
              { activecash ? <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" /> }
              </li></a>
              <ul className={activecash ? 'a' : 'sub-menu' }>
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="Voucher ">
              <a href='#HomeSection'> <li className='nav-link' onClick={()=> setactivevocher(!activevocher)}><div><MdAccountBalanceWallet className='nav-icon' /><span>Voucher</span></div>
              { activevocher ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />}
              </li></a>
              <ul className={activevocher ? 'a' : 'sub-menu' }>
                <a href="#"><li className="sub-item">Credit</li></a>
                <a href="#"><li className="sub-item">Debit</li></a>
                <a href="#"><li className="sub-item">Journal</li></a>
                <a href="#"><li className="sub-item">Contra</li></a>
              </ul>
            </div>
            <div className="Report ">
              <a href='#HomeSection'> <li className='nav-link'  onClick={()=> setactivereport(!activereport)}><div><FaReceipt className='nav-icon' /><span>Report</span></div>
              { activereport ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />}
              </li></a>
              <ul className={activereport ? 'a' : 'sub-menu' }>
                <a href="#"><li className="sub-item">Accounts</li></a>
                <a href="#"><li className="sub-item">Purchase</li></a>
                <a href="#"><li className="sub-item">General</li></a>
              </ul>
            </div>
            <div className="Language ">
              <a href='#HomeSection'> <li className='nav-link' onClick={()=> setactivelanguage(!activelanguage)}><div><FaLanguage className='nav-icon' /><span>Language</span></div>
              { activelanguage ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />}
              </li></a>
              <ul className={activelanguage ? 'a' : 'sub-menu' }>
                <a href="#"><li className="sub-item">All</li></a>
                <a href="#"><li className="sub-item">Create</li></a>
                <a href="#"><li className="sub-item">Trashed</li></a>
              </ul>
            </div>
            <div className="User ">
              <a href='#HomeSection'> <li className='nav-link' onClick={()=> setactiveuser(!activeuser)}><div><FaUser  className='nav-icon' /><span>User</span></div>
              { activeuser ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />}
              </li></a>
              <ul className={activeuser ? 'a' : 'sub-menu' }>
                <a href="#"><li className="sub-item">All</li></a>
              </ul>
            </div>
            <div className="Role Mange">
              <a href='#HomeSection'> <li className='nav-link'  onClick={()=> setactivemanager(!activemanager)}><div><FaUserLock className='nav-icon' /><span>Role Manage</span></div>
              { activemanager ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />}
              </li></a>
              <ul className={activemanager ? 'a' : 'sub-menu' }>
                <a href="#"><li className="sub-item">All</li></a>
              </ul>
            </div>
            <div className="Settings">
              <a href='#HomeSection'> <li className='nav-link' onClick={() => setactivesettings(activesettings)}><div><CiSettings className='nav-icon' /><span>Settings</span></div>
              { activesettings ?  <TiMinus className="plus-icon" /> : <GoPlus className="plus-icon" />}
              
              </li></a>
              <ul className={activesettings ? 'a' : 'sub-menu' }>
                <a href="#"><li className="sub-item">General</li></a>
                <a href="#"><li className="sub-item">System</li></a>
              </ul>
            </div>
          </ul>
        <div className="copyrigth">
          <p>Powered By 
          <span href='#' className="copy-span">E-Account</span> <br/>
           Version: 2.0.0
          </p>
        </div> 
          </div>
      
  )
}

export default AdminComponent