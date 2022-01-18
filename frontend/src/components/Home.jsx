import '../styles/variables.scss'
import './Home.scss'

export default function Home(){
  
  return (
    <div class="Main">
      <nav>
      <div class="content-left">
        <img src="/images/Logo.png" class="logo" />
       
          <div class="title">
            <span>Walking Buddies</span>
          </div>
       
      </div>
      <div class="content-right">
          <a href="/login">
            <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">
              <span>Login</span>
            </button>
          </a>
          <a href="/register">
            <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">
              <span>Register</span>
            </button>
          </a>
      </div>

    </nav>

      <div class="fullscreen">
      </div>

      <video loop muted autoplay ="" class="fullscreen-video">
        <source src="/images/HomePage.mp4" type="video/mp4"/>
      </video>

      <div class="main-content">
      <div id="about-us-container">
        <div class="about-us-text">
          <h4>Walking Buddies !</h4>
          <h5>
            Walking Buddies helps you find a Walking Buddy in your own community!
          </h5>
          <p>
           The idea of Walking Buddies was conceived with a simple thought process of connecting people with
          similar preferences and get them walking together. This idea seems more pertinent in the current times 
          where Covid-19 has exposed us to unprecedented levels of social isolation and confined us to our homes. 
          Walking is the best way to stay both physically and socially active and Walking Buddies does just that for you ! 
          <h5>So hop on to the App and connect with your Walking Buddy!</h5>
          </p>
        </div>
        <img src="/images/jarritos-mexican-soda--84tQTSV_aE-unsplash.jpg" />
      </div>
      </div>

      <footer><span>© 2022 by Walking Buddies. All rights reserved.</span></footer>
  </div>
  
  )
}