import { connect, useDispatch } from 'react-redux';
import { ADD_PEOPLE } from '../../../redux/constants/action-types';
import { addPeople } from '../../../redux/actions';

const mapStateToProps  = (state) => {
    return { people: state.people }
}


let newPerson = {
    firstName: "New",
    lastName: "New",
    id: Math.ceil(Math.random() * 10000)
}


function addToList () {
    console.log(`Button clicked!`)
}

const ConnectedList = ({ people}) => {
    const dispatch = useDispatch()
    
    return (
    <ul>
        { people.map(person => 
            (<li key={person.id}>{person.firstName}{person.lastName}</li>)
            )}

            <button onClick={() => dispatch(addPeople(newPerson))}>Add to List</button>
    </ul>

)}

const List = connect(mapStateToProps)(ConnectedList);

export default List;