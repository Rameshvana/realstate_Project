import { getloginData } from '../../services/user.service';
import { useNavigate } from 'react-router-dom';
import './login.component.css'

function LoginComponent(){

  let navigate = useNavigate()

  const getLogin = (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    
    getloginData()
    .then(((res) => {
      console.log(res.data)
      
      let user = res.data.filter((item) => item.Email == email && item.Password == password)
      if (user.length > 0){
        alert('User exist')
        localStorage.setItem('User',JSON.stringify(user))
        navigate('/dashbord')
      }else{
      alert('User not exist') }
    }))
    .catch(()=>{
      alert('get login data failed')
    })
  }

    return (
          <div className='login'>

          
          <div class="login-container">
          <img src="https://demo.erealestate.eaccount.xyz/upload/company-logo/1701958405logo%20150x150.png" alt="Building" class="login-icon"/>
          <h1 class="login-title">LOG IN</h1>
        
           <form action="action_page.php" onSubmit={getLogin}>
            
            <input type="email" id='email' name="email" placeholder="E-Mali Address" class="login-input" required/>
            
            <input type="password" id ='password' name="password" placeholder="Enter Password" class="login-input" required/>
            
            <input type="checkbox" name="remember" class="login-remember" checked/> Remember Me
            <button type="submit" class="login-button">Login</button>
         
            <p class="login-demo">Demo Login<br/>
              Email: admin@account.xyz  Password: 1234<br/>
              Email: accountant@account.xyz Password: 1234<br/>
            </p>
           </form>
        </div> 
        </div>
    )     
}

export default LoginComponent