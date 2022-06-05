import CharacterDetail from "./CharacterDetail"

function PartyDetails (props) {

    
    return (
        <div>
            <CharacterDetail name={props.party[0].name} class={props.party[0].class} level={props.party[0].level}  />
            <CharacterDetail name={props.party[1].name} class={props.party[1].class} level={props.party[1].level}  />
            <CharacterDetail name={props.party[2].name} class={props.party[2].class} level={props.party[2].level}  />
            <CharacterDetail name={props.party[3].name} class={props.party[3].class} level={props.party[3].level}  />
        </div>
    )
}

export default PartyDetails