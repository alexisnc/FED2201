import { useState } from 'react'

function EditShow (props) {
const [title, setTitle] = useState(props.title);

return (
    <form>
        <label>New Title: 
            <input type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </label>
    </form>
)
}

export default EditShow