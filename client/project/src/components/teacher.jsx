import React from "react"
import axios from 'axios'
import './teacher.css'
import ReactDOM from "react-dom";

import Create from "./Create";




function Teacher(){
 
  

    return(
        <div className="prof">
            
            <div className="prof__img">
            <h1>Don't Settle For Average</h1>
            <h3>Teacher space</h3>
            <div className="hola">
            <button className="batouna"  id="loula"  >Create Course</button>
            <button className="batouna">See all Courses</button>
            <button className="batouna">Delete Course</button>
            </div>
            </div>
            
         </div>
    )
}

export default Teacher