import React from "react";

class Banner extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    } 

 render(){
    return(
        <div className="main-background">
            <div>
                <img>Romace 101</img>
            </div>
            <div>
                <p>Make comics, reach millions</p>
                <span>Get Started Now</span>
            </div>
            <div>
                <img>QR link</img>
                <p>Download our app for</p>
                <p>FREE!</p>
            </div>
        </div>
    )
}
}

export default Banner 