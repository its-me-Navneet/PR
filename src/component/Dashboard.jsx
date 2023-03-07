import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { GoArrowBoth } from "react-icons/go";
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';

import '../App.css'

 const Dashboard = () => {
  return (
     <div className="dash">
      
          <hr />
         
          <div className="navbtn">  <Link className='link'  to='/' role="button"><DashboardIcon/> Dashboard </Link></div>
          <div className="navbtn">  <Link className='link'  to='/account' role="button"><AccountCircleIcon/> ACCOUNT PROFILE </Link></div>
          <div className="navbtn">  <Link className='link'  to='/exercise' role="button"><GoArrowBoth/> EXRCISE PLANS  </Link></div>
          <div className="navbtn">  <Link className='link'  to='/diet' role="button"><RestaurantIcon/> DIET PLANS </Link></div>
          <div className="navbtn">  <Link className='link'  to='/subscription' role="button"><MonetizationOnRoundedIcon/> SUBSCRIPTION </Link></div>
          <div className="navbtn">  <Link className='link'  to='/extra' role="button"><NoteAltRoundedIcon/> EXTRA SERVICS </Link></div>
     
       <hr /> 
           <button className='logout' > Log Out</button>
        
     </div>
  )
} 
export default Dashboard ;

const Middle = ()=>{
   return (
     <div className="mid display">
          <h3>File Manager</h3>
         <div className="middle middle1"> Allfiles</div>
         <div className="middle middle2"> Approved</div>
         <div className="middle middle3"> Bookmarked</div>
         <div className="middle middle4"> Rejected</div>
       

     </div>
   )
}

 export {Middle} ;
