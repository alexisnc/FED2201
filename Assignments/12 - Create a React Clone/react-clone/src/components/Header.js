import React from "react";
import './Header.css'
 

class Header extends React.Component {
    constructor(){
        super()
        this.state ={

        }
    }

    render(){
        return(
        //    <div className='top-section'>
                <header className="header">
                    <nav className="links">
                        <a href>ORIGINALS</a>
                        <br/>
                        <a href>GENRES</a>
                        <br/>
                        <a href>POPULAR</a>
                        <br/>
                        <a href>CANVAS</a>
                    </nav>

                    <div className="right-section">
                        <p>Creators 101</p>
                        <button>Publish</button>
                        <button>Log In</button>
                        <button>Search</button>
                    </div>

                    
                </header>
            // </div>
            
        )
    }
}

export default Header