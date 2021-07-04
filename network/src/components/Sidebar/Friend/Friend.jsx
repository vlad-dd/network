import '../../../styles/Friend.css';

const Friend = (props) => {
    return(
        <div className='main_container'>
            <div>
                <img src={props.src} className="friend_img"/>
            </div>
            <div>
                <span>{props.firstname}</span>
                <span>{props.lastname}</span>
            </div>


        </div>
    )
}

export default Friend;