import ComponentB from "./ComponentB"

function ComponentA () {

    let name = "Gary"
     return (
         <div className="simple">
             <h3>Component A</h3>

             <ComponentB firstName={name} />
         </div>
     )
}

export default ComponentA