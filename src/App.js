import { BrowserRouter } from "react-router-dom"

import './App.css';
import LoginComponent from './Components/Login/login.component';
import MainComponent from './Components/MainComponent/main.component';

import AdminComponen from './Components/Admin/admin.component'
import DashbordComponent from "./Components/Dashbord/dashbord.component";

import { Routing } from "./Routing.js";




const App = () => (
    <BrowserRouter>
       <appRouter/>
       <Routing/>
       
    </BrowserRouter>
  )

   


export default App;
