import React from 'react' 
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Card from './component/Card';

import  Dashboard, { Middle }  from './component/Dashboard';


const App = () => {
  return (
    <div className='container1'>
     
      <div className="left">  
   
             <Card/>
          <div className="box2">
       <Router> 
        <Dashboard/> 
         <Routes> 
           
            <Route path="/" element={<Middle/>}>
              <Route path="/allFiles" element={<Card/>}  />
             <Route path="approve" element={Card} />
             <Route path="bookmarked" element={Card} />
             <Route path="rejected" element={Card} />
             <Route path="card" element={Card} />  
             </Route>
         
           <Route path="/account" element="" />
           <Route path="/exercise" element="" />
           <Route path="/diet" element=""  />
           <Route path="/subscription" element=""  />
           <Route path="/extra" element =""/>
           <Route path="/logout" element=""  /> 
            
         </Routes>
       </Router>  
        </div>
       </div>
          

       
         

           
      
     
    </div>
  )
}

export default App 


// import {BrowserRouter as Router, Link,
//   Routes, Route} from 'react-router-dom'
//   import './App.css';
//   import Card from './component/Card';
// import Dashboard, { Middle } from './component/Dashboard';

// import MediaCard from './component/MediaCard';
 
  
//   function App() {
//   return (
//     <div className="App">
//     <Router>
//       <Dashboard/>
//       <Routes>
      
//       <Route path="/" element={<Middle />}>
//         <Route path="allFiles" element={<MediaCard />} />
//         <Route path="bookmarked" element={<Card/>}/>
//       </Route>
//       <Route path="/account" element={<Card/>} />
//       </Routes>
//     </Router>
//     </div>
//   );
//   }
  
//   export default App;
  