import '../../../styles/Message.css';

const Message = (props) => {
    return(
        <div>
            <div className="message">{props.text}</div>
        </div>

    )
}

export default Message;