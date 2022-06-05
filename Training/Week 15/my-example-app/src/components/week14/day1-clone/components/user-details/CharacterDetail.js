function CharacterDetail (props) {
    return (
        <div className="character-detail">

            <p>{props.name}</p>

                <p>{props.class}</p>
                <p>{props.level}</p>
            <div className="character-stats">
            </div>
        </div>
    )
}

export default CharacterDetail