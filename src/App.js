import Contact from "./Components/Contact.js";
import Hero from "./Components/Hero";
import Who from "./Components/Who";
import  Works  from "./Components/Works";
import './App.css'






 function App(){
  return (
  
     <div className="Container">
        <Hero/>
         <Who/>
        <Works/>
       <Contact/>
     </div>
  
  )
 }

 export default App;