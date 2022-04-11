function ComponentD (props) {
    return (
        <div className="simple">
            <h3>Component D</h3>

            <p> Welcome, {props.firstName} {props.lastName}</p>
        </div>
    )
}

export default ComponentD