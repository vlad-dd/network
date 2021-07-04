import '../../styles/Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
  <div>
      <div className="content">
        <ProfileInfo />
        <MyPosts PostData={props.postState.PostData} dispatch = {props.dispatch}/>
      </div>
    </div>
  );
};

export default Profile;
