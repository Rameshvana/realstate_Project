import {Component} from 'react'
import {  FaTwitter,FaLinkedinIn  } from "react-icons/fa6";
import { FaFacebookF,FaInstagram,FaSkype   } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { SiReacthookform } from "react-icons/si";
import { RiBookOpenLine } from "react-icons/ri";
import { CiServer } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import './main.component.css'
import HomeSection from '../Home/home.component';
import AboutSecction from '../About/about.component';

import SkillComponent from '../Skills/skill.component';
import ResumeComponent from '../Resume/resume.component';
import PortfolioComponent from '../Portfolio/portfolio.component';
import ServiceComponent from '../Service/service.component';
import ContactComponent from '../Contact/contact.component';


//<p className='ip-heading'>@IPortfolio</p>

class MainComponent extends Component{
  render(){
    return (
      <div>
      
          <div className='row'>

            <div className='col-3 admin-view'>
             <div className='profile-card'>
              <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg'
                className='profile-img'/>
                <h1 className='profile-title'>Ramesh Smith</h1>
                <div className='social-links'>
                    <a href='#'><li><FaTwitter className='icon'/></li></a>
                    <a href='#'><li><FaFacebookF  className='icon'/></li></a>
                    <a href='#'><li><FaInstagram  className='icon'/></li></a>
                    <a href='#'><li><FaSkype  className='icon'/></li></a>
                    <a href='#'><li><FaLinkedinIn  className='icon'/></li></a>
                </div>
              </div>
              <ul className='nav-menu'>
                <a href='#HomeSection'> <li className='nav-link'><AiOutlineHome className='nav-icon'/><span>Home</span></li></a>
                <a href='#AboutSection'><li className='nav-link'><FiUser className='nav-icon'/><span>About</span></li></a>
                <a href='#ResumeSection'><li className='nav-link'><SiReacthookform className='nav-icon'/><span>Resume</span></li></a>
                <a href='#PortfolioSection'><li className='nav-link'><RiBookOpenLine className='nav-icon'/><span>Portfolio</span></li></a>
                <a href='#ServiceSection'><li className='nav-link'><CiServer className='nav-icon'/><span>Services</span></li></a>
                <a href='#ContactSection'><li className='nav-link'><IoIosMail className='nav-icon'/><span>Contact</span></li></a>
              </ul>
              <div className='right-card'>
                <p>@ Copyright <span>iPortfolio</span> <br/> Designed by <span className='boot'>BootstrapMode</span></p>
              </div>
            </div>

            <div className='col-9 user-view'>
                <div id='HomeSection'>
                  <HomeSection/>
                </div>
                <div id='ResumeSection'>
                    <ResumeComponent/>
                </div>
                <div id='PortfolioSection'>
                  <PortfolioComponent/>
                </div>
                <div id='ServiceSection'>
                  <ServiceComponent/>
                </div>

                <div id='ContactSection'>
                  <ContactComponent/>
                </div>
                <div id='AboutSection'>
                  <AboutSecction/>
                </div>
               

            </div>

          </div>
          
          </div>
      
    )
  }
}

export default MainComponent