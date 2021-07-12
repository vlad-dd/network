import '../../../styles/Friend.css';

const Friend = (props) => {
    return(
        <div className='main_container'>
            <div>
                <img src={props.src} className="friend_img" alt='friend_img'/>
            </div>
            <div>
                <span>{props.firstname}</span>
                <span>{props.lastname}</span>
                
            </div>
            <div className="status">
                <button>Follow</button>
            </div>
        </div>
    )
}

export default Friend;