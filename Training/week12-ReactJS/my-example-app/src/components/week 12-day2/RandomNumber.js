import  React from "react";

class RandomNumber extends React.Component {
    constructor(){
        super();
        this.state ={
            randomNumber: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.randomNumber === nextState.randomNumber){
            return false
        }else{
            return true
        }
    }

    //lifecycle methods

    render (){
        return (
            <div>
                <h3> Random Number: 
                    <span className="span-number">{this.state.randomNumber}</span>
                </h3>
            </div>
        )
    }
}

export default RandomNumber