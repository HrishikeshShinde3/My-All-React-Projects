import React from 'react'
import './Navbar.css'
import { FaHome, FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  return (
    <>
    <div className='Navbar-Section'>
           <div className='Links'>
              
              
              <ul className='NavIcons'>
              <img src="https://cdn.freelogodesign.org/files/0a778cd430ae4d9d9d1191cf1fe8d16f/thumb/logo_200x200.png?v=638201437340000000" alt='logo'></img>

                 <li> <FaHome size={40}/>Home</li>
                 <li> <FontAwesomeIcon icon={faGraduationCap} size="2x" />Education</li>
                 <li> <FontAwesomeIcon icon={faBriefcase} size="2x" />Projects</li>
                 <li> <FontAwesomeIcon icon={faEnvelope} size="2x"  />Contact</li>
                 <li className="search-bar">
                 <input type="text" placeholder="Search..."/>
                  <button>
                    <FaSearch color='rgb(45, 217, 2, 1)' size={20}/>
                  </button>
                 </li>
             </ul> 
             
               
            
            </div>
             

         
    </div>
    
   

    
   </>
  )
}
