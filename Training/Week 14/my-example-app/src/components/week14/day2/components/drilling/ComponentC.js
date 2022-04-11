import ComponentD from "./ComponentD"

function ComponentC (props) {
    return (
        <div className="simple">
            <h3>Component C</h3>

            <p>Your last name is "{props.lastName}"</p>

            <ComponentD firstName={props.firstName} lastName={props.lastName}/>
        </div>
    )
}

export default ComponentC