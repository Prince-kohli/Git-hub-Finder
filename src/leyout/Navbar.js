import React from "react";
import { Link } from "react-router-dom";



const Navbar=()=>{
    
        return(
            <>
            <nav className="navbar bg-danger ">
                <div className="container">
                <h4>Github Finder</h4>

                
                    
                        <Link  className="hav nav-link" to='/'>Home</Link>
                        
                        
                        <Link className="rig nav-link" to='/About'>About</Link>
                        
                        </div>
                
            </nav>
            </>
        )
    }


export default Navbar;