function MessageDisplay (props){
    return (
        <div className="message-display">
            <h3>{props.messageTitle}</h3>
            <p>{props.messageText}</p>
        </div>
    )
}

export default MessageDisplay