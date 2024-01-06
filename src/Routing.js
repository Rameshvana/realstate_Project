import { Routes,Route } from "react-router-dom"
import HomeComponent from "./Components/Hme"
import DashbordComponent from "./Components/Dashbord/dashbord.component"
import AdminComponent from "./Components/Admin/admin.component"
import CreateProjectComp from "./Components/Project/Create/create.component"

import { Login } from "@mui/icons-material"
import LoginComponent from "./Components/Login/login.component"
import CreateProdectComp from './Components/Prodect/create/create.component'
import AllProductComp from "./Components/Prodect/All/all.component"
import AllProjectComp from './Components/Project/All/all.component'
import CreateSellComp from "./Components/Sell/Create/create.component"



export const Routing = () => (
  <Routes>
  
    <Route path='Admin' element={<AdminComponent></AdminComponent>}/>
    <Route path='/' element={<DashbordComponent></DashbordComponent>}/>
    <Route path='/Dashbord' element={<DashbordComponent></DashbordComponent>}/>
    <Route path='/project-create' element={<CreateProjectComp></CreateProjectComp>}/>
    <Route path='/project-all' element={<AllProjectComp></AllProjectComp>}/>
    <Route path='/prodect-create' element={<CreateProdectComp></CreateProdectComp>}/>
    <Route path='/login' element={<LoginComponent></LoginComponent>}/>
    <Route path='/prodect-all' element={<AllProductComp></AllProductComp>}/>
    <Route path='/sell-create' element={<CreateSellComp></CreateSellComp>}/>
  
  </Routes>
)



