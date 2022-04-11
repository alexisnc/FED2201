import { useState } from "react"
import ComponentC from "./ComponentC"

function ComponentB (props) {
    // let name = "Lemon"
const [ person, setPerson ] = useState({firstName:props.firstName, lastName: "Lemon"})


    return (
        <div className="simple">
            <h3>Component B</h3>

            <p>Hi, {props.firstName}!!!</p>

            <ComponentC firstName= {props.firstName} lastName={person.lastName}/>
        </div>
    )
}

export default ComponentB