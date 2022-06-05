import "./UserDetails.css"

import DetailsHeader from "../user-details/DetailsHeader"
import PartyDetails from "../user-details/PartyDetails"

function UserDetails () {

    const characters = [
        {
            name: "Axton",
            class: "Soldier",
            level: 50
        },
        {
            name: "Maya",
            class: "Soldier",
            level: 50
        },
        {
            name: "Gaige",
            class: "Soldier",
            level: 50
        },
        {
            name: "Brick",
            class: "Soldier",
            level: 50
        }
    ]

    return (
        <div className="wrapper">
            <h1>User Details</h1>

            <DetailsHeader />
            <PartyDetails party={characters}/>
        </div>
    )
}

export default UserDetails