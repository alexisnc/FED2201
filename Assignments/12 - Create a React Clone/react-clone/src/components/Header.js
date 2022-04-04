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
                        <Link>ORIGINALS</Link>
                        <Link>GENRES</Link>
                        <Link>POPULAR</Link>
                        <Link>CANVAS</Link>
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