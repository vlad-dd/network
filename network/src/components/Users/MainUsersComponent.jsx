import defaultUserPhoto from "../../images/default.png";
import { NavLink } from 'react-router-dom';


const MainUsersComponent = (props) => {
  let selected = "selected";
  let pagesCount = Math.ceil(
    props.totalUsersCount / props.pageSize
  );

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return(
    <div>
        <div>
          {pages.map((pg) => {
            return (
              <span
                className={props.currentPage === pg && selected}
                onClick={() => {props.getPage(pg)}}>{pg}</span>
            );
          })}
        </div>
        {props.users.map((el) => {
          return (
            <div key={el.id}>
              <NavLink to={'/profile/' + el.id}><img src={ el.photos.small != null ? el.photos.small : defaultUserPhoto} className="users_img" /></NavLink>
              <span className="info_block">
                <span>Nickname: {el.name}</span>
                <br />
                <span>Status: {el.status}</span>
                <br />
                <span>City: {el.location}</span>
              </span>
              <div>
                {el.followed ? (
                  <button disabled = {props.followingInProgress.some(id => id === el.id)}
                    onClick={() => {
                      props.UnFollowThunkCreator(el.id)}}>Unfollow</button>) : 
                    (<button disabled = {props.followingInProgress.some(id => id === el.id)} onClick={() => {
                      props.followThunkActionCreator(el.id)}}>Follow</button>)}
              </div>
            </div>
          );
        })}
      </div>
  )
  
}


export default MainUsersComponent;