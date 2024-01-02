import './login.component.css'

function LoginComponent(){

    return (
          <div class="login-container">
          <img src="https://demo.erealestate.eaccount.xyz/upload/company-logo/1701958405logo%20150x150.png" alt="Building" class="login-icon"/>
          <h1 class="login-title">LOG IN</h1>
        
           <form action="action_page.php" method="post">
            
            <input type="email" name="email" placeholder="E-Mali Address" class="login-input" required/>
            
            <input type="password" name="password" placeholder="Enter Password" class="login-input" required/>
            
            <input type="checkbox" name="remember" class="login-remember" checked/> Remember Me
            <button type="submit" class="login-button">Login</button>
         
            <p class="login-demo">Demo Login<br/>
              Email: admin@account.xyz  Password: 1234<br/>
              Email: accountant@account.xyz Password: 1234<br/>
       
            </p>
           </form>
        </div> 
    )     
}

export default LoginComponent