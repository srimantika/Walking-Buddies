import '../styles/variables.scss'
import './Login.scss'
export default function Login(){
  
  return (
    
  
      <div class="login" id="login">

<nav>
      <div class="content-left">
        <img src="/images/Logo.png" class="logo" />
       
          <div class="title">
            <span>Walking Buddies</span>
          </div>
       
      </div>

    </nav>
    <div>
      <h4>Welcome back ! Login to find your walking Buddy !</h4>
    </div>

      <form method="POST" action="/login" class="login-form">
       
        <div class="form-username">
          <label> Username:</label>
          <input type="username" name="username" placeholder = "Email Id"class="form-control" />
        </div>

      
        <div class="form-password">
          <label>Password:</label>
          <input type="password" name="password" placeholder = "Password" class="form-control" />
        </div>

        <button
        
          type="submit"
          id="submitbutton"
          class="btn-dark">
          Sign in
        </button>
    
      </form>
      <footer><span>© 2022 by Walking Buddies. All rights reserved.</span></footer>
    </div>
  
  )
}