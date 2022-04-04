import React from "react";
 

class Header extends React.Component {
    constructor(){
        super()
        this.state ={

        }
    }

    render(){
        return(
           <div>
                <header>
                    <nav>
                        <a>ORIGINALS</a>
                        <a>GENRES</a>
                        <a>POPULAR</a>
                        <a>CANVAS</a>
                    </nav>

                    <div>
                        <p>Creators 101</p>
                        <button>Publish</button>
                        <button>Log In</button>
                        <button>Search</button>
                    </div>
                </header>
            </div>
            
        )
    }
}

export default Header